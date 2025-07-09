import React from "react";
export const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <ModalContext.Provider value={{ open, handleClose, handleOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
