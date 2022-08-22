export default function getZodiac(month: number, day: number): string | null {
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return 'red'
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return 'orange'
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    return 'yellow'
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    return 'lime'
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return 'green'
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return 'teal'
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return 'cyan'
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return 'blue'
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return 'indigo'
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return 'violet'
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return 'purple'
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return 'fuchsia'
  } else return null
}
