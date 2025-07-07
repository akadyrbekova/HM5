const ButtonUI = ({ handleOpen }) => {
  return (
    <button
      onClick={handleOpen}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition"
    >
      Добавить
    </button>
  );
};

export default ButtonUI;
