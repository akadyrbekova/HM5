import { useContext } from "react";
import DirectionComponent from "../component/Direction";
import ButtonUI from "../ui/Button";
import { ModalContext } from "../context/ModalContext";
const Direction = () => {
  const { handleOpen, setActiveModal } = useContext(ModalContext);
  return (
    <>
      <h1>Направление</h1>
      <DirectionComponent />
      <ButtonUI
        handleOpen={handleOpen}
        setActiveModal={setActiveModal}
        modalType="direction"
      />
    </>
  );
};

export default Direction;
