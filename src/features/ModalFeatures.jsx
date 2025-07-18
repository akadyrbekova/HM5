import { useContext } from "react";
import MyModal from "../component/modal/Modal";
import { ModalContext } from "../context/ModalContext";
import { AddContext } from "../context/AddContext";
import ModalDirection from "../component/modal/ModalDirection";

const ModalFeatures = () => {
  const { handleClose, activeModal, setActiveModal } = useContext(ModalContext);
  const {
    addFaculty,
    name,
    shortName,
    setName,
    setShortName,
    code,
    setCode,
    addDirection,
  } = useContext(AddContext);

  const handleSubmit = (e) => {
    addFaculty(e, () => {
      setTimeout(() => {
        handleClose();
        setActiveModal(null);
      }, 1000);
    });
  };

  const handleDirection = (e) => {
    addDirection(e, () => {
      setTimeout(() => {
        handleClose();
        setActiveModal(null);
      }, 1000);
    });
  };
  return (
    <>
      {activeModal === "faculty" && (
        <MyModal
          open={true}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          shortName={shortName}
          setName={setName}
          name={name}
          setShortName={setShortName}
        />
      )}

      {activeModal === "direction" && (
        <ModalDirection
          open={true}
          handleClose={handleClose}
          handleSubmit={handleDirection}
          code={code}
          setCode={setCode}
          setName={setName}
          name={name}
        />
      )}
    </>
  );
};

export default ModalFeatures;
