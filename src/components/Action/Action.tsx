import { useContext } from 'react';
import { Button } from '@material-ui/core';
import { TimeContext } from '../../context/TimeContext';

function Action() {
  const { getTimeConverted, timeZone } = useContext(TimeContext);
  return (
    <Button
      onClick={getTimeConverted!}
      disabled={!timeZone}
      variant='contained'
      color='primary'
      size='large'
      fullWidth
    >
      convert
    </Button>
  );
}

export default Action;
