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
  Typography,
} from '@mui/material'
import { useEffect } from 'react'
import {
  Controller,
  FieldError,
  FieldValues,
  SubmitHandler,
  UseControllerProps,
  useForm,
  useFormState,
} from 'react-hook-form'

type Inputs = {
  familyName: string
}

function Signup(): JSX.Element {
  const {
    control,
    handleSubmit,
    formState,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<Inputs>()

  const submitForm: SubmitHandler<Inputs> = (data) => {
    console.log(data.familyName)
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

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
        onSubmit={handleSubmit(submitForm)}
      >
        <Controller
          control={control}
          rules={{ required: 'this field is required' }}
          render={({ field }) => (
            <>
              <TextField
                {...field}
                id="familyName"
                label="Family Name"
                variant="outlined"
              />
              {errors && (
                <Typography color="error">
                  {errors?.familyName?.message}
                </Typography>
              )}
            </>
          )}
          name="familyName"
          defaultValue=""
        />

        {/* <TextField id="givenName" label="Given Name" variant="outlined" />
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
        <TextField id="BSN" label="BSN" variant="outlined" /> */}
        <Button variant="contained" disableElevation type="submit">
          signup for shot
        </Button>
      </Stack>
    </Box>
  )
}
export default Signup
