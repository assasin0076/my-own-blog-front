export function getDiffInHours(date1: Date, date2: Date) {
  return Math.abs(Number(date1) - Number(Number(date2))) / 36e5;
}
export function getDiffInMinutes(date1: Date, date2: Date) {
  return (Math.abs(Number(date1) - Number(Number(date2))) / 36e5) * 60;
}
