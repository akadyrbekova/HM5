import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiModal from "@mui/material/Modal";
import ButtonUI from "../../ui/Button";

const MyModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <div className="mb-4 flex justify-end">
        <ButtonUI handleOpen={handleOpen} />
      </div>
      <MuiModal open={open} onClose={handleClose}>
        <Box className="absolute left-1/2 top-[20%] w-[500px] -translate-x-1/2 rounded-xl bg-white p-6 shadow-lg">
          <Typography variant="h6" className="mb-4">
            Факультет/Организация
          </Typography>

          <input
            type="text"
            placeholder="Короткое название"
            className="mb-3 w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Полное название"
            className="mb-4 w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="w-full rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
            Сохранить
          </button>
        </Box>
      </MuiModal>
    </>
  );
};

export default MyModal;
