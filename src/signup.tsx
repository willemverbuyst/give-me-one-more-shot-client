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
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { isValidBSN } from 'bsn-js'

const schema = z.object({
  BSN: z
    .string()
    .min(1, { message: 'this field is required' })
    .refine(isValidBSN, () => ({ message: 'is not valid a valid bsn' })),
  email: z.string().email(),
  familyName: z.string().min(1, { message: 'this field is required' }),
  gender: z.string().min(1, { message: 'this field is required' }),
  givenName: z.string().min(1, { message: 'this field is required' }),
})

enum Gender {
  Female,
  Male,
  Other,
}

type Inputs = {
  BSN?: string
  email?: string
  familyName?: string
  gender?: Gender
  givenName?: string
}

const defaultValues = {
  BSN: '',
  email: '',
  familyName: '',
  gender: Gender.Other,
  givenName: '',
}

function Signup(): JSX.Element {
  const {
    control,
    handleSubmit,
    formState,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<Inputs>({ defaultValues, resolver: zodResolver(schema) })

  const submitForm: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValues)
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
            <FormControl>
              <FormLabel id="genderRadioButtonsGroupLabel">Gender</FormLabel>
              <RadioGroup
                {...field}
                row
                aria-labelledby="genderOptionsLabel"
                name="genderOptions"
              >
                <FormControlLabel
                  value={Gender.Female}
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value={Gender.Male}
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value={Gender.Other}
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
