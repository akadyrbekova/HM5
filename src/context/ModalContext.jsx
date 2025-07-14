import React, { useState } from "react";
export const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <ModalContext.Provider
      value={{ open, handleClose, handleOpen, activeModal, setActiveModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
