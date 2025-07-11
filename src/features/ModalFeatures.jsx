import { useContext } from "react";
import MyModal from "../component/modal/Modal";
import { ModalContext } from "../context/ModalContext";
import { AddContext } from "../context/AddContext";
const ModalFeatures = () => {
  const { open, handleClose, handleOpen } = useContext(ModalContext);
  const { addFaculty, name, shortName, setName, setShortName } =
    useContext(AddContext);

  const handleSubmit = (e) => {
    addFaculty(e, () => {
      setTimeout(() => {
        handleClose();
      }, 1000);
    });
  };
  return (
    <>
      <MyModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        handleSubmit={handleSubmit}
        shortName={shortName}
        setName={setName}
        name={name}
        setShortName={setShortName}
      />
    </>
  );
};

export default ModalFeatures;
