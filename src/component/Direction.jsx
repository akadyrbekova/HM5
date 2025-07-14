import ModalFeatures from "../features/ModalFeatures";
import SelectFeatures from "../features/SelectFeatures";

const DirectionComponent = () => {
  return (
    <div>
      <SelectFeatures />
      <div className="mb-4 flex justify-end">
        <ModalFeatures />
      </div>
    </div>
  );
};

export default DirectionComponent;
