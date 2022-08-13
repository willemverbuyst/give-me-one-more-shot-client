import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from '@mui/material'

function Signup(): JSX.Element {
  return (
    <Box>
      <Stack
        component="form"
        sx={{
          width: '50ch',
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField id="familyName" label="Family Name" variant="outlined" />
        <TextField id="givenName" label="Given Name" variant="outlined" />
        <TextField
          id="birthDate"
          label="BirthDate (dd/mm/yyyy)"
          variant="outlined"
        />
        <FormControl>
          <FormLabel id="genderRadioButtonsGroupLabel">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="genderRadioButtonsGroupLabel"
            defaultValue="other"
            name="radioButtonsGroup"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <TextField id="email" label="Email" variant="outlined" />
        <TextField id="BSN" label="BSN" variant="outlined" />
        <Button variant="contained" disableElevation>
          signup for shot
        </Button>
      </Stack>
    </Box>
  )
}
export default Signup
