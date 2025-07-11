import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const SelectUI = ({ selected, handleChange, faculties }) => {
  return !faculties || faculties.length === 0 ? null : (
    <>
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
    </>
  );
};

export default SelectUI;
