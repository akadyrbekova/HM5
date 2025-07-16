import { useContext } from "react";
import DirectionComponent from "../component/Direction";
import ButtonUI from "../ui/Button";
import { ModalContext } from "../context/ModalContext";
import SelectFeatures from "../features/SelectFeatures";

const Direction = () => {
  const { handleOpen, setActiveModal } = useContext(ModalContext);

  return (
    <>
      <h1>Направление</h1>
      <SelectFeatures />
      <ButtonUI
        handleOpen={handleOpen}
        setActiveModal={setActiveModal}
        modalType="direction"
      />
      <DirectionComponent />
    </>
  );
};

export default Direction;
