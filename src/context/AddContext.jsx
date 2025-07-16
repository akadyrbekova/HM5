import React, { useState, useEffect, useContext } from "react";
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
  const [directions, setDirections] = useState([]);
  const [selectedFacultyId, setSelectedFacultyId] = useState(null);

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
      directions: [],
    };

    setFaculties((prev) => [...prev, newFaculty]);
    setShortName("");
    setName("");
    handleClose();
  };

  const addDirection = (e) => {
    e.preventDefault();

    if (!selectedFacultyId || code.trim() === "" || name.trim() === "") return;

    const newDirection = {
      id: Date.now(),
      code: code.trim(),
      name: name.trim(),
    };

    const updatedFaculties = faculties.map((faculty) => {
      if (faculty.id === selectedFacultyId) {
        const updatedDirections = [...(faculty.directions || []), newDirection];
        return { ...faculty, directions: updatedDirections };
      }
      return faculty;
    });

    setFaculties(updatedFaculties);

    setCode("");
    setName("");
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
        directions,
        selectedFacultyId,
        setSelectedFacultyId,
        setDirections,
      }}
    >
      {children}
    </AddContext.Provider>
  );
};
