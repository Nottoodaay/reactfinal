import { Route } from 'react-router';
import './App.css';
import { RoutesComponent } from './Routes';
import { Header } from './components/header/Header';
import { Box, styled } from '@mui/material';

const StyledContentContainer = styled(Box)(({theme})=>({
  [theme.breakpoints.up("sm")]:{
    marginLeft: "255px",
  },
  marginTop: "60px",
  height: 'calc(100vh - 64px)',
  padding: 10
}))


function App() {
  return (
    <Box>
      <Header/>
      <StyledContentContainer>
        <RoutesComponent/>
      </StyledContentContainer>
    </Box>
  );
}

export default App;
