import './form.scss'

import DateForm from 'interfaces/Form'
import { ChangeEvent, FC, useState } from 'react'
import getZodiac from '../../ts/zodiac'

const Form: FC<DateForm> = ({ setCurrentSign }) => {
  function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0')
  }

  function formatDate(date: Date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-')
  }

  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()))

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const random = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    e.preventDefault()
    new Audio(`/sounds/sound_${random}.mp3`).play()
    setSelectedDate(e.target.value)

    const splitDate = e.target.value.split('-')
    const month = splitDate[1]
    const day = splitDate[2]
    const sign = `var(--${getZodiac(parseInt(month), parseInt(day))})`

    if (typeof sign === 'string') setCurrentSign(sign)
  }

  return (
    <div className="control">
      <input
        min="0000-01-01"
        name="birthdate"
        onChange={handleChange}
        type="date"
        value={selectedDate}
      />
    </div>
  )
}

export default Form
