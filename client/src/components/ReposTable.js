import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ReposTable = ({ repos, onRepoClick }) => {
  console.log(repos);
  const headers = [
    "Repo Name",
    "Language",
    "Description",
    "Star Count",
    "Fork Count",
    "Date Created",
  ];
  return (
    <>
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
                onClick={(e) => onRepoClick(e, repo)}>
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
    </>
  );
};

export default ReposTable;
