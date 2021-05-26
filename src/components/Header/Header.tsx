import {
  Box,
  AppBar,
  Slide,
  Toolbar,
  useScrollTrigger,
} from '@material-ui/core';
import Logo from './Logo/Logo';

function Header() {
  const trigger = useScrollTrigger();

  return (
    <>
      <Slide appear={false} direction='down' in={!trigger}>
        <AppBar color='primary'>
          <Toolbar>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              width='100%'
            >
              <Logo />
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </>
  );
}

export default Header;
