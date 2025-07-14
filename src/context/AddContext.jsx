import React, { useContext, useState, useEffect } from "react";
import { ModalContext } from "./ModalContext";

export const AddContext = React.createContext();

export const AddProvider = ({ children }) => {
  const [shortName, setShortName] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [faculties, setFaculties] = useState(() => {
    const saved = localStorage.getItem("faculties");
    return saved ? JSON.parse(saved) : [];
  });
  const { handleClose } = useContext(ModalContext);

  useEffect(() => {
    localStorage.setItem("faculties", JSON.stringify(faculties));
  }, [faculties]);

  const addFaculty = (e) => {
    e.preventDefault();

    if (shortName.trim() === "" || name.trim() === "") return;

    const newFaculty = {
      id: Date.now(),
      shortName: shortName.trim(),
      name: name.trim(),
    };

    setFaculties((prev) => [...prev, newFaculty]);
    setShortName("");
    setName("");
    handleClose();
  };

  const addDirection = (e) => {
    e.preventDefault();

    if (code.trim() === "" || code.trim() === "") return;

    const newFaculty = {
      id: Date.now(),
      code: code.trim(),
      name: name.trim(),
    };

    setFaculties((prev) => [...prev, newFaculty]);
    setShortName("");
    setName("");
    handleClose();
  };
  return (
    <AddContext.Provider
      value={{
        addFaculty,
        shortName,
        name,
        setShortName,
        setName,
        faculties,
        setFaculties,
        addDirection,
        code,
        setCode,
      }}
    >
      {children}
    </AddContext.Provider>
  );
};
