import { useContext } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { TimeContext } from '../../context/TimeContext';
import LoaderBackdrop from '../BackdropLoader/BackdropLoader';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

function Response() {
  const { loading, error, response } = useContext(TimeContext);

  if (error) return <ErrorComponent>{error}</ErrorComponent>;
  if (loading) return <LoaderBackdrop open={loading} />;

  if (!response) return null;
  const { time, timeZone } = response;

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom>Converted time</Typography>
        <Typography variant='body2' color='primary'>
          <b>
            {time} {timeZone}
          </b>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Response;
