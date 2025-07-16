import { useContext } from "react";
import { AddContext } from "../context/AddContext";
import SelectUI from "../component/Select";

const SelectFeatures = () => {
  const { faculties, selectedFacultyId, setSelectedFacultyId } =
    useContext(AddContext);

  const handleChange = (event) => {
    setSelectedFacultyId(event.target.value);
  };

  return (
    <SelectUI
      faculties={faculties}
      selected={selectedFacultyId || ""}
      handleChange={handleChange}
    />
  );
};

export default SelectFeatures;
