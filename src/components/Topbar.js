import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "auto" }}>
      <AppBar
        position="static"
        sx={{ width: "auto", bgcolor: "#34384C", minWidth: "100%" }}>
        <Toolbar>
          <Button
            variant="text"
            sx={{ color: "white" }}
            onClick={() => navigate("/")}>
            Find Reposatories
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Sidebar;
