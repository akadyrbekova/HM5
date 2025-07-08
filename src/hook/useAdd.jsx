import { useEffect, useState } from "react";

const useAdd = () => {
  const [shortName, setShortName] = useState("");
  const [name, setName] = useState("");
  const [faculties, setFaculties] = useState([]);
  useEffect(() => {
    console.log(faculties);
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

    //   fetch(data, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     method: "POST",
    //     body: JSON.stringify({
    //       data,
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);
    //         setShortName((prev) => [...prev, data]);
    //         setName((prev) => [...prev, data]);
    //         setShortName("");
    //         setName("");
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       }),
    //   });
  };

  return {
    addFaculty,
    shortName,
    name,
    setShortName,
    setName,
  };
};
export default useAdd;
