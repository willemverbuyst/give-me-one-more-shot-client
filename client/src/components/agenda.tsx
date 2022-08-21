import { Typography } from '@mui/material'
import dayjs from 'dayjs'
import { MonthDetails } from '../models'

export default function Agenda(): JSX.Element {
  const currentDate = dayjs()

  function getMonthDetails(date: dayjs.Dayjs): MonthDetails {
    const month = date.format('MM')
    const nameOfMonth = date.format('MMMM')
    const year = date.format('YYYY')
    const firstDateOfTheMonth = dayjs(`${year}${month}01`)
    const firstDayOfTheWeek = Number(firstDateOfTheMonth.format('d'))
    const lastDateOfTheMonth = Number(date.clone().endOf('month').format('DD'))

    return {
      firstDateOfTheMonth,
      firstDayOfTheWeek,
      lastDateOfTheMonth,
      nameOfMonth,
      month,
      year,
    }
  }
  return (
    <Typography>
      <pre>{JSON.stringify(getMonthDetails(currentDate), null, 4)}</pre>
    </Typography>
  )
}
