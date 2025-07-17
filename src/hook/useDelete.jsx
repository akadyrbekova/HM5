import { useContext } from "react";
import { AddContext } from "../context/AddContext";

const useDelete = () => {
  const { faculties, setFaculties, selectedFacultyId } = useContext(AddContext);
  console.log(faculties);

  const deleteFaculty = (id) => {
    const newFaculties = faculties.filter((item) => item.id !== id);
    setFaculties(newFaculties);
  };
  const deleteDirection = (id) => {
    const selectedFaculty = faculties.find((f) => f.id === selectedFacultyId);
    const newFaculties = faculties.filter((item) => item.id !== id);
    console.log(selectedFaculty, "555555");
  };

  return {
    deleteFaculty,
    deleteDirection,
  };
};
export default useDelete;
