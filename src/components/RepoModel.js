import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CommitsTable from "./CommitsTable";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "75%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

const RepoModel = ({
  commits_url,
  setModelDisplay,
  modelDisplay,
  repoTitle,
}) => {
  const [commits, setCommits] = useState([]);
  const handleClose = () => setModelDisplay(false);

  useEffect(() => {
    const getCommits = async () => {
      let result = await axios.get(commits_url);
      console.log(result.data);
      setCommits(result.data);
    };
    getCommits(commits_url);
  }, [commits_url]);

  return (
    <Modal
      open={modelDisplay}
      onClose={handleClose}
      sx={{ overflowX: "scroll" }}>
      <Box sx={style}>
        <CloseIcon
          sx={{
            position: "absolute",
            top: "5px",
            right: "5px",
            cursor: "pointer",
          }}
          onClick={handleClose}
        />
        <Typography variant="h3" sx={{ textAlign: "center", width: "95%" }}>
          {repoTitle}
        </Typography>
        <CommitsTable commits={commits} />
      </Box>
    </Modal>
  );
};

export default RepoModel;
