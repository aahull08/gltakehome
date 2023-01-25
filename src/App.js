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
          <Route path="/" element={<Main />} />
          {/* <Route path="/sessions" element={<SessionList />} />
          <Route path="/sessions/:sessionId" element={<Player />} />
          <Route path="/funnels" element={<FunnelList />} />
          <Route path="/funnels/create" element={<NewFunnelForm />} />
          <Route path="/funnels/update/:id" element={<EditFunnelForm />} />
          <Route path="/funnels/:funnelId" element={<Funnel />} /> */}
        </Routes>
      </Layout>
    </Box>
  );
}

export default App;
