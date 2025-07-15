const ButtonUI = ({ handleOpen, setActiveModal, modalType }) => {
  const handleClick = () => {
    setActiveModal(modalType);
    handleOpen();
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition"
    >
      Добавить
    </button>
  );
};

export default ButtonUI;
