import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, pl: "0px" }}>
      <AppBar position="static" sx={{ bgcolor: "#34384C" }}>
        <Toolbar varient="dense">
          <Button
            variant="text"
            sx={{ color: "white", ml: "15px" }}
            onClick={() => navigate("/")}>
            Find Reposatories
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Sidebar;
