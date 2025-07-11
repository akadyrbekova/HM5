import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

import useDelete from "../hook/useDelete";
import useEdit from "../hook/useEdit";
import { useContext } from "react";
import { AddContext } from "../context/AddContext";
import ModalFeatures from "../features/ModalFeatures";

const FacultyComponent = () => {
  const { faculties } = useContext(AddContext);
  const { deleteFaculty } = useDelete();
  const { editFaculty } = useEdit();

  return (
    <>
      <ModalFeatures />

      <TableContainer className="rounded-xl shadow border border-gray-200">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell className="font-semibold">№</TableCell>
              <TableCell align="right" className="font-semibold">
                Короткое наименование
              </TableCell>
              <TableCell align="right" className="font-semibold">
                Факультет
              </TableCell>
              <TableCell align="right" className="font-semibold">
                Действие
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {faculties && faculties.length > 0 ? (
              faculties.map((item, index) => (
                <TableRow
                  key={item.id}
                  hover
                  className="hover:bg-gray-50 transition"
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="right">{item.shortName}</TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={(e) => editFaculty(item.id)}
                      color="primary"
                      aria-label="edit"
                      size="small"
                      className="text-blue-600 hover:bg-blue-100 p-1 rounded-full"
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      onClick={(e) => deleteFaculty(item.id)}
                      color="error"
                      aria-label="clear"
                      size="small"
                      className="text-red-600 hover:bg-red-100 p-1 rounded-full"
                    >
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  Нет данных...
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FacultyComponent;
