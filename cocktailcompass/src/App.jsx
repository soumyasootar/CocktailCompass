import { Box } from "@chakra-ui/react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  return (
    <Box w={"100vw"} >
    <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
      </Routes>
    </Box>
  );
}

export default App;
