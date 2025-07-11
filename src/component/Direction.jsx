import React, { useState, useContext } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { AddContext } from "../context/AddContext";

const DirectionComponent = () => {
  const { faculties } = useContext(AddContext);
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  if (!faculties || faculties.length === 0) {
    return null;
  }

  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <InputLabel id="faculty-label">Факультет</InputLabel>
      <Select
        labelId="faculty-label"
        id="faculty-select"
        value={selected}
        onChange={handleChange}
        input={<OutlinedInput label="Факультет" />}
      >
        {faculties.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DirectionComponent;
