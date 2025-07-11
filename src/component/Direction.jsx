import SelectFeatures from "../features/SelectFeatures";
import ButtonUI from "../ui/Button";

const DirectionComponent = () => {
  return (
    <div>
      <SelectFeatures />
      <div className="mb-4 flex justify-end">
        <ButtonUI />
      </div>
    </div>
  );
};

export default DirectionComponent;
