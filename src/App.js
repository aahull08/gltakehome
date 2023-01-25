import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
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
          {/* <Route path="/" element={<Navigate to="/sessions" />} /> */}
          <Route path="/:companyName" element={<Main />} />
          {/* <Route path="/sessions" element={<SessionList />} /> */}
        </Routes>
      </Layout>
    </Box>
  );
}

export default App;
