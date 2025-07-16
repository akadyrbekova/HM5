import ModalFeatures from "../features/ModalFeatures";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

const DirectionComponent = () => {
  return (
    <div>
      <div className="mb-4 flex justify-end">
        <ModalFeatures />
      </div>
      <TableContainer className="rounded-xl shadow border border-gray-200">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell className="font-semibold">№</TableCell>
              <TableCell align="right" className="font-semibold">
                Шифр
              </TableCell>
              <TableCell align="right" className="font-semibold">
                Название
              </TableCell>
              <TableCell align="right" className="font-semibold">
                Действие
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow hover className="hover:bg-gray-50 transition">
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="right">123</TableCell>
              <TableCell align="right">hello</TableCell>
              <TableCell align="right">
                <IconButton
                  color="primary"
                  aria-label="edit"
                  size="small"
                  className="text-blue-600 hover:bg-blыue-100 p-1 rounded-full"
                >
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton
                  color="error"
                  aria-label="clear"
                  size="small"
                  className="text-red-600 hover:bg-red-100 p-1 rounded-full"
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={4} align="center">
                Нет данных...
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DirectionComponent;
