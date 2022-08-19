import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Patient } from './models'

export default function List() {
  const [patients, setPatients] = useState<Patient[]>([])
  const getPatients = async () => {
    const { data } = await axios.get('http://localhost:9090/patients')
    setPatients(data)
  }

  useEffect(() => {
    getPatients()
  }, [])

  return patients ? (
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
          {patients.map((patient) => (
            <TableRow
              key={patient.familyName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row">
                {patient.familyName}
              </TableCell>
              <TableCell align="left">{patient.givenName}</TableCell>
              <TableCell align="right">{patient.birthdate}</TableCell>
              <TableCell align="left">{patient.gender}</TableCell>
              <TableCell align="left">{patient.email}</TableCell>
              <TableCell align="right">{patient.BSN}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : null
}
