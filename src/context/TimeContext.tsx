import { ChangeEvent, createContext, useState } from "react";

type ContextType = Partial<ReturnType<typeof useTime>>;

export const TimeContext = createContext<ContextType>({});

export const TimeContextProvider: React.FC = ({ children }) => {
  const contextValue = useTime();
  return (
    <TimeContext.Provider value={contextValue}>{children}</TimeContext.Provider>
  );
};

type ResponseType = {
  time: string;
  timeZone: string;
};

function useTime() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [timeZone, setTimeZone] = useState("");
  const [response, setResponse] = useState<ResponseType>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  async function getTimeConverted() {
    setError(undefined);
    setLoading(true);
    try {
      const data = { time: getTimeString(), timeZone: parseFloat(timeZone) };
      const res = await fetch("https://tuten-test-2-server.herokuapp.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      setResponse((await res.json()).response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  function handleTimeChange(event: ChangeEvent<HTMLInputElement>) {
    setResponse(undefined);
    const { name, value: valueString } = event.target;
    if (!valueString) return setTime((prev) => ({ ...prev, [name]: 0 }));

    const value = parseInt(valueString);
    if (name === "hours") {
      if (value >= 0 && value < 24)
        setTime((prev) => ({ ...prev, hours: value }));
      return;
    }
    if (value >= 0 && value < 60)
      setTime((prev) => ({ ...prev, [name]: value }));
  }

  function handleTimeZoneChange(event: ChangeEvent<HTMLInputElement>) {
    setResponse(undefined);
    setTimeZone(event.target.value);
  }

  function getTimeString() {
    const { hours, minutes, seconds } = time;
    return `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
  }

  return {
    time,
    timeZone,
    handleTimeChange,
    handleTimeZoneChange,
    getTimeConverted,
    loading,
    error,
    response,
  };
}

function twoDigits(value: number): string {
  return value >= 10 ? value.toString() : "0" + value;
}
