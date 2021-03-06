import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'data', label: 'Incident Date', minWidth: 170 },
  { id: 'time', label: 'Incident Time', minWidth: 100 },
  {
    id: 'rating',
    label: 'Crime Rating',
    minWidth: 170,
  },
  {
    id: 'desc',
    label: 'Description',
    minWidth: 170,
  }
];


export default function CrimeTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if(props.crimedata){
      const rows = props.crimedata
  return (
    <Paper className="root">
      <TableContainer className="container">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,i) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                 <TableCell>{row.IncidentDate.S}</TableCell>
                 <TableCell>{row.IncidentTime.S}</TableCell>
                 <TableCell>{row.CrimeRating.S}</TableCell>
                 <TableCell>{row.IncidentDescription.S}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
    }
    else{
        return(
            <></>
        )
    }
}
