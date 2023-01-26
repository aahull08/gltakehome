import { Box, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import RepoModel from "./RepoModel";
import SearchArea from "./SearchArea";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import ReposTable from "./ReposTable";

const Main = () => {
  const [repos, setRepos] = useState([]);
  const [modelDisplay, setModelDisplay] = useState(false);
  const [repoURL, setRepoURL] = useState("");
  const [companyName, setCompanyName] = useState("Netflix");
  const [repoTitle, setRepoTitle] = useState("");
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

  const handleRepoClick = (e, repo) => {
    setModelDisplay(true);
    let repoName = e.currentTarget.firstChild.textContent;
    setRepoTitle(repoName);
    setRepoURL(repo.commits_url.slice(0, -6));
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
        <ReposTable repos={repos} onRepoClick={handleRepoClick} />
        {!modelDisplay ? null : (
          <RepoModel
            commits_url={repoURL}
            setModelDisplay={setModelDisplay}
            modelDisplay={modelDisplay}
            repoTitle={repoTitle}
          />
        )}
      </Box>
    </Box>
  );
};

export default Main;
