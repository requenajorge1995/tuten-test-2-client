import { CssBaseline, Container, Box } from '@material-ui/core';
import { TimeContextProvider } from './context/TimeContext';
import TimeInput from './components/TimeInput/TimeInput';
import Header from './components/Header/Header';
import Action from './components/Action/Action';
import Response from './components/Response/Response';

function App() {
  return (
    <TimeContextProvider>
      <CssBaseline />
      <Header />;
      <Container maxWidth='sm'>
        <TimeInput />
        <Box marginY={5}>
          <Action />
        </Box>
        <Response />
      </Container>
    </TimeContextProvider>
  );
}

export default App;
