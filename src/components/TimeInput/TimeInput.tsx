import { Box, Grid, TextField, Typography, MenuItem } from '@material-ui/core';
import { useContext } from 'react';
import { TimeContext } from '../../context/TimeContext';

function TimeInput() {
  const contextValue = useContext(TimeContext);
  const { time, timeZone, handleTimeChange, handleTimeZoneChange } =
    contextValue as Required<typeof contextValue>;
  const { hours, minutes, seconds } = time;

  return (
    <Box mt={5}>
      <Box mb={2}>
        <Typography variant='h4'>Insert a time</Typography>
      </Box>
      <Grid container alignItems='center' justify='center' spacing={2}>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <TextField
                variant='outlined'
                name='hours'
                label='Hours'
                type='number'
                onChange={handleTimeChange}
                value={hours}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant='outlined'
                name='minutes'
                label='Minutes'
                type='number'
                onChange={handleTimeChange}
                value={minutes}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant='outlined'
                name='seconds'
                label='Seconds'
                type='number'
                value={seconds}
                onChange={handleTimeChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            variant='outlined'
            select
            label='Time Zone'
            value={timeZone}
            onChange={handleTimeZoneChange}
            fullWidth
          >
            {new Array(48).fill(null).map((_, index) => {
              const value = -12 + index / 2;
              return (
                <MenuItem key={value} value={value}>
                  {value < 0 ? value : '+' + value}
                </MenuItem>
              );
            })}
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TimeInput;
