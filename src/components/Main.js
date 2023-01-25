import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import RepoModel from "./RepoModel";
import SearchArea from "./SearchArea";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const headers = [
    "Repo Name",
    "Language",
    "Description",
    "Star Count",
    "Fork Count",
    "Date Created",
  ];

  const [repos, setRepos] = useState([]);
  const [modelDisplay, setModelDisplay] = useState(false);
  const [repoURL, setRepoURL] = useState("");
  const [companyName, setCompanyName] = useState("Netflix");
  const navigate = useNavigate();

  useEffect(() => {
    const getRepos = async () => {
      try {
        const repoData = await axios.get(
          `https://api.github.com/orgs/${companyName}/repos`
        );
        repoData.data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(repoData.data);
      } catch (error) {
        setRepos([]);
        console.log(error.message);
      }
    };
    navigate(`/${companyName}`);
    getRepos();
  }, [companyName, navigate]);

  const handleRepoClick = (commits_url) => {
    setModelDisplay(true);
    setRepoURL(commits_url.slice(0, -6));
  };

  const handleSubmit = (e, newCompany) => {
    e.preventDefault();
    setCompanyName(newCompany);
  };

  return (
    <Box
      sx={{
        ml: "15px",
        mt: "10px",
        mr: "15px",
        width: "auto",
        minWidth: "700px",
      }}>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={0.5}>
        <Title companyName={companyName} />
        <SearchArea handleSubmit={handleSubmit} />
      </Stack>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 350 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map((header) => {
                  return <TableCell key={header}>{header}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {repos.map((repo) => (
                <TableRow
                  key={repo.id}
                  data-id={repo.id}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#ECEFF4",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => handleRepoClick(repo.commits_url)}>
                  <TableCell>{repo.name}</TableCell>
                  <TableCell>{repo.language || "N/A"}</TableCell>
                  <TableCell>{repo.description || "N/A"}</TableCell>
                  <TableCell>{repo.stargazers_count || "N/A"}</TableCell>
                  <TableCell>{repo.forks_count || "N/A"}</TableCell>
                  <TableCell>{repo.created_at.slice(0, 10) || "N/A"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {!modelDisplay ? null : (
          <RepoModel
            commits_url={repoURL}
            setModelDisplay={setModelDisplay}
            modelDisplay={modelDisplay}
          />
        )}
      </Box>
    </Box>
  );
};

export default Main;
