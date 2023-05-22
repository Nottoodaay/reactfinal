import "./App.css";
import { RoutesComponent } from "./Routes";
import { Header } from "./components/header/Header";
import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useCart, useProduct, useUser } from "./hooks";
import { Sidebar } from "./components/sidebar";

const StyledContentContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    marginLeft: "255px",
  },
  marginTop: "60px",
  height: "calc(100vh - 64px)",
  padding: 10,
}));

function App() {
  const { getHomePageProducts } = useProduct();
  const { userData } = useUser();
  const { fetchCart } = useCart();
  const [isDrawerOpen, setIsDrawerOpen] = useState();

  useEffect(() => {
    getHomePageProducts();
  }, []);

  useEffect(() => {
    if (userData?._id) {
      fetchCart(userData?._id);
    }
  }, [userData]);

  return (
    <Box>
      <Header setIsDrawerOpen={setIsDrawerOpen} />
      <StyledContentContainer>
        <Sidebar isDrawerOpen={isDrawerOpen} setDrawerOpen={setIsDrawerOpen} />
        <RoutesComponent />
      </StyledContentContainer>
    </Box>
  );
}

export default App;
