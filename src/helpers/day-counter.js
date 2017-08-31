const countDays = (startDate, endDate) => {
  console.log({startDate, endDate});
  const yearInDays = []
  let currentDate = startDate
  console.log({currentDate, 'typeof': typeof currentDate});
  // let currentDate = new Date()
  while (currentDate <= endDate) {
    yearInDays.push(currentDate)
    currentDate = currentDate.setDate(currentDate.getDate() + 1)
  }

  return yearInDays.reduce((counter, day) => {
      counter[day] ? counter[day]++ : counter[day] = 1
      return counter
    }, {})
}

const now = new Date()
const thisYear = now.getFullYear()
const [startDate, endDate] = [new Date(`01/01/${thisYear}`), new Date(`12/31/${thisYear}`)]

export default countDays(startDate, endDate) // returns an object with keys corresponding to each day of the week, and respective values which count how many of those occur during the specified date range, in our case thisYear.