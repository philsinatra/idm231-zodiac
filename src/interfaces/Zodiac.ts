interface Zodiac {
  id?: number
  color: string
  setSign: (color: string, sound: string) => void
  sound: string
}

export default Zodiac
