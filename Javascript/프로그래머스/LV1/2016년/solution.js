function solution(a, b) {
  const arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  let month = a.toString()
  if (month.length < 2) {
    month = '0' + month
  }
  let date = b.toString()
  if (date.length < 2) {
    date = '0' + date
  }

  const day = new Date(`2016-${month}-${date}`).getDay()

  return arr[day]
}
