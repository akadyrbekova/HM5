import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { AddContext } from "../context/AddContext";

const useEdit = () => {
  const { setFaculties, setShortName, setName } = useContext(AddContext);
  const { handleOpen } = useContext(ModalContext);

  const editFaculty = (id) => {
    handleOpen();

    const getFaculties = JSON.parse(localStorage.getItem("faculties"));
    const newFaculties = getFaculties.find((item) => item.id === id);

    if (newFaculties) {
      setShortName(newFaculties.shortName);
      setName(newFaculties.name);
    }
    setFaculties((prev) => [...prev, newFaculties]);
  };

  return {
    editFaculty,
  };
};
export default useEdit;
