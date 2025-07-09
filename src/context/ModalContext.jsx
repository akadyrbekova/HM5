import React from "react";
export const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const showModal = () => {};

  return (
    <ModalContext.Provider value={{ open, handleClose, handleOpen, showModal }}>
      {children}
    </ModalContext.Provider>
  );
};
