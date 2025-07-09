// import { useEffect, useState } from "react";

// const useAdd = () => {
//   const [shortName, setShortName] = useState("");
//   const [name, setName] = useState("");
//   const [faculties, setFaculties] = useState(() => {
//     const saved = localStorage.getItem("faculties");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     console.log(faculties);
//     localStorage.setItem("faculties", JSON.stringify(faculties));
//   }, [faculties]);

//   const addFaculty = (e) => {
//     e.preventDefault();
//     if (shortName.trim() === "" || name.trim() === "") return;

//     const newFaculty = {
//       id: Date.now(),
//       shortName: shortName.trim(),
//       name: name.trim(),
//     };

//     setFaculties((prev) => [...prev, newFaculty]);
//     setShortName("");
//     setName("");
//   };

//   return {
//     addFaculty,
//     shortName,
//     name,
//     setShortName,
//     setName,
//     faculties,
//     setFaculties,
//   };
// };
// export default useAdd;
