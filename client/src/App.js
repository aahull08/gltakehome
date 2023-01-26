import { Box } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main";
// import "./App.css";

function App() {
  return (
    <Box
      className="App"
      sx={{
        width: "fit-content",
        "@media (min-width: 730px)": {
          width: "100%",
        },
      }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/Netflix" />} />
          <Route path="/:companyName" element={<Main />} />
        </Routes>
      </Layout>
    </Box>
  );
}

export default App;
