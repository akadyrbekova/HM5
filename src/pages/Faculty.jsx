import { useContext } from "react";
import FacultyComponent from "../component/Faculty";
import ButtonUI from "../ui/Button";
import { ModalContext } from "../context/ModalContext";
const Faculty = () => {
  const { handleOpen, setActiveModal } = useContext(ModalContext);
  return (
    <>
      <h1>Факультет</h1>
      <ButtonUI
        handleOpen={handleOpen}
        setActiveModal={setActiveModal}
        modalType="faculty"
      />
      <FacultyComponent />
    </>
  );
};

export default Faculty;
