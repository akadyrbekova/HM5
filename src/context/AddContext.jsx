import React, { createContext, useContext, useState, useEffect } from "react";

export const AddContext = React.createContext();

export const AddProvider = ({ children }) => {
  const [shortName, setShortName] = useState("");
  const [name, setName] = useState("");
  const [faculties, setFaculties] = useState(() => {
    const saved = localStorage.getItem("faculties");
    return saved ? JSON.parse(saved) : [];
  });

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
      }}
    >
      {children}
    </AddContext.Provider>
  );
};
