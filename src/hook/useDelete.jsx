import { useContext } from "react";
import { AddContext } from "../context/AddContext";

const useDelete = () => {
  const { faculties, setFaculties } = useContext(AddContext);

  const deleteFaculty = (id) => {
    const newFaculties = faculties.filter((item) => item.id !== id);
    setFaculties(newFaculties);
  };

  return {
    deleteFaculty,
  };
};
export default useDelete;
