import { useState, useContext, useEffect } from "react";
import { AddContext } from "../context/AddContext";
import SelectUI from "../component/Select";
const SelectFeatures = () => {
  const [selected, setSelected] = useState("");
  const { faculties } = useContext(AddContext);

  useEffect(() => {
    if (faculties && faculties.length > 0) {
      setSelected("");
      console.log(faculties);
    }
  }, [faculties]);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <>
      <SelectUI
        faculties={faculties}
        selected={selected}
        handleChange={handleChange}
      />
    </>
  );
};

export default SelectFeatures;
