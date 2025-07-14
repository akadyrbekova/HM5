import Typography from "@mui/material/Typography";
import ModalAdd from "@mui/material/Modal";
import ButtonUI from "../../ui/Button";

const ModalDirection = ({
  children,
  open,
  handleClose,
  handleSubmit,
  handleOpen,
  code,
  setName,
  setCode,
  name,
}) => {
  return (
    <>
      <div className="mb-4 flex justify-end">
        <ButtonUI handleOpen={handleOpen} />
      </div>

      <ModalAdd open={open} onClose={handleClose}>
        <form
          onSubmit={handleSubmit}
          className="absolute left-1/2 top-[20%] w-[500px] -translate-x-1/2 rounded-xl bg-white p-6 shadow-lg"
        >
          <Typography variant="h6" className="mb-4">
            Специальность
          </Typography>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="number"
            placeholder="Шифр"
            className="mb-3 w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Полное название"
            className="mb-4 w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
          >
            Сохранить
          </button>
        </form>
      </ModalAdd>
    </>
  );
};

export default ModalDirection;
