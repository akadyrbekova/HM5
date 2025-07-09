import useAdd from "./useAdd";

const useDelete = () => {
  const { faculties, setFaculties } = useAdd();
  const deleteFaculty = (id) => {
    const newFaculties = faculties.filter((item) => item.id !== id);
    setFaculties(newFaculties);
  };
  return {
    deleteFaculty,
  };
};
export default useDelete;
