import { Button, TextField } from "@mui/material";
import { useState } from "react";

const SearchArea = ({ handleSubmit }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, value)}>
      <TextField
        id="standard-helperText"
        label="Repo Name"
        value={value}
        variant="standard"
        onChange={handleChange}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default SearchArea;
