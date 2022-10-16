/* eslint-disable react/jsx-props-no-spreading */
import * as z from 'zod'
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
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { isValidBSN } from 'bsn-js'
import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { Gender, Patient } from '../models'
import { REGEX_BIRTHDATE } from '../constants'

const schema = z.object({
  birthdate: z.string().min(10).max(10).regex(REGEX_BIRTHDATE, {
    message: 'Date is not in the correct format (dd/mm/yyyy)',
  }),
  BSN: z
    .string()
    .min(1, { message: 'This field is required' })
    .refine(isValidBSN, () => ({ message: 'This not valid a valid bsn' })),
  email: z.string().email(),
  familyName: z.string().min(1, { message: 'This field is required' }),
  gender: z.string().min(1, { message: 'This field is required' }),
  givenName: z.string().min(1, { message: 'This field is required' }),
})

const defaultValues = {
  birthdate: '',
  BSN: '',
  email: '',
  familyName: '',
  gender: Gender.OTHER,
  givenName: '',
}

function Signup(): JSX.Element {
  const {
    control,
    handleSubmit,
    formState,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<Patient>({ defaultValues, resolver: zodResolver(schema) })

  const submitForm: SubmitHandler<Patient> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValues)
    }
  }, [formState, isSubmitSuccessful, reset])

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
        />

        <Controller
          control={control}
          render={({ field }) => (
            <>
              <TextField
                {...field}
                id="givenName"
                label="Given Name"
                variant="outlined"
              />
              {errors && (
                <Typography color="error">
                  {errors?.givenName?.message}
                </Typography>
              )}
            </>
          )}
          name="givenName"
        />

        <Controller
          control={control}
          render={({ field }) => (
            <>
              <TextField
                {...field}
                id="birthdate"
                label="Birthdate (dd/mm/yyyy)"
                variant="outlined"
              />
              {errors && (
                <Typography color="error">
                  {errors?.birthdate?.message}
                </Typography>
              )}
            </>
          )}
          name="birthdate"
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormControl>
              <FormLabel id="genderRadioButtonsGroupLabel">Gender</FormLabel>
              <RadioGroup
                {...field}
                row
                aria-labelledby="genderOptionsLabel"
                name="genderOptions"
              >
                <FormControlLabel
                  value={Gender.FEMALE}
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value={Gender.MALE}
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value={Gender.OTHER}
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          )}
          name="gender"
        />

        <Controller
          control={control}
          render={({ field }) => (
            <>
              <TextField
                {...field}
                id="email"
                label="Email"
                variant="outlined"
              />
              {errors && (
                <Typography color="error">{errors?.email?.message}</Typography>
              )}
            </>
          )}
          name="email"
        />

        <Controller
          control={control}
          render={({ field }) => (
            <>
              <TextField {...field} id="BSN" label="BSN" variant="outlined" />
              {errors && (
                <Typography color="error">{errors?.BSN?.message}</Typography>
              )}
            </>
          )}
          name="BSN"
        />

        <Button variant="contained" disableElevation type="submit">
          signup for shot
        </Button>
      </Stack>
    </Box>
  )
}
export default Signup
