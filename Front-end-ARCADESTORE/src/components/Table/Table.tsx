import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
} from "@mui/material";
import { ActionsMenu } from "./components/ActionsMenu"; 

export interface Column<T> {
  id: keyof T | "actions";
  label: string;
  minWidth?: number;
  type?: string;
  align?: "left" | "right" | "center";
  actions?: { label: string | React.ReactNode ; onClick: (row: T) => void }[];
  format?: (value: any, row?: T) => string | number | React.ReactNode;
}

interface TableCustomProps<T> {
  columns: Column<T>[];
  rows: T[];
}

export default function TableCustom<T>({
  columns,
  rows,
}: TableCustomProps<T>) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "auto" }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={String(column.id)}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                  {columns.map((column) => {
                    if (column.id === "actions") {
                      return (
                        <TableCell
                          key={`actions-${rowIndex}`}
                          align="center"
                          sx={{ width: 80 }}
                        >
                          <ActionsMenu actions={column.actions!} row={row} />
                        </TableCell>
                      );
                    }
                    const value = row[column.id as keyof typeof row];
                    return (
                      <TableCell key={String(column.id)} align={column.align}>
                        {column.format ? column.format(value) : String(value)}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
