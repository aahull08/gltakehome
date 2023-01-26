import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const CommitsTable = ({ commits }) => {
  const headers = [
    "Commit Title",
    "Committer username",
    "Commit hash",
    "Date Created",
  ];
  return (
    <TableContainer
      sx={{
        ml: "20px",
        mt: "10px",
        mr: "20px",
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
  );
};

export default CommitsTable;
