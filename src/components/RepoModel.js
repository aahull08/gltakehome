import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "75%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

const RepoModel = ({ commits_url, setModelDisplay, modelDisplay }) => {
  const headers = [
    "Commit Title",
    "Committer username",
    "Commit hash",
    "Date Created",
  ];

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
    <Modal open={modelDisplay} onClose={handleClose}>
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
        <TableContainer
          sx={{
            ml: "60px",
            mt: "10px",
            mr: "60px",
            width: "auto",
            maxHeight: "200",
            boxShadow: 1,
          }}
          component={Paper}>
          <Table sx={{ minWidth: 350 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map((header) => {
                  return <TableCell key={header}>{header}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {commits.map((commit) => (
                <TableRow
                  key={commit.node_id}
                  data-id={commit.node_id}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#ECEFF4",
                      cursor: "pointer",
                    },
                  }}>
                  <TableCell>{commit.commit.message}</TableCell>
                  <TableCell>
                    {commit.committer ? commit.committer.login : "N/A"}
                  </TableCell>
                  <TableCell>{commit.sha || "N/A"}</TableCell>
                  <TableCell>
                    {commit.commit.author.date.slice(0, 10) || "N/A"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
};

export default RepoModel;
