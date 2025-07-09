import useAdd from "./useAdd";

const useEdit = () => {
  const { faculties, setFaculties } = useAdd();
  const editFaculty = (id) => {
    const newFaculties = faculties.find((item) => item.id === id);
  };
  return {
    editFaculty,
  };
};
export default useEdit;
