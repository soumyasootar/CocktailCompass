import { useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CockTailList from "./components/CockTailList";
import Header from "./components/Header";

function App() {
  return (
    <Box w={"100vw"}>
    <Header/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<CockTailList />} />
      </Routes>
    </Box>
  );
}

export default App;
