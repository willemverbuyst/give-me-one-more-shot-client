import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { generateDummyData } from './helpers'

const rows = Array.from({ length: 10 }).map(() => generateDummyData())

export default function List() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Family Name</TableCell>
            <TableCell align="left">Given Name</TableCell>
            <TableCell align="right">Birthdate</TableCell>
            <TableCell align="left">Gender</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="right">BSN</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.familyName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row">
                {row.familyName}
              </TableCell>
              <TableCell align="left">{row.givenName}</TableCell>
              <TableCell align="right">{row.birthdate}</TableCell>
              <TableCell align="left">{row.gender}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="right">{row.BSN}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
