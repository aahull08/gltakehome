import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

const SearchArea = ({ handleSubmit }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, value)}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        spacing={1}>
        <TextField
          id="standard-helperText"
          label="Organization Name"
          value={value}
          variant="standard"
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default SearchArea;
