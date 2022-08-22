import './sign.scss'

import Zodiac from 'interfaces/Zodiac'
import { FC } from 'react'

const Sign: FC<Zodiac> = ({ color, setSign, sound }) => {
  const buttonColor = `var(--${color})`
  return (
    <button
      style={{
        backgroundColor: buttonColor,
      }}
      onClick={() => setSign(buttonColor, sound)}
    />
  )
}

export default Sign
