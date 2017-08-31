// const countWorkdays = inputDays => inputDays.reduce((counter, day) => {
//     counter[day] ? counter[day]++ : counter[day] = 1
//     return counter // returns an object with the number of days
//   }, {})

const getBusinessDatesCount = (startDate, endDate) => {
    let count = 0;
    let curDate = startDate;
    while (curDate <= endDate) {
        let dayOfWeek = curDate.getDay();
        if(!((dayOfWeek === 6) || (dayOfWeek === 0)))
           count++;
        curDate.setDate(curDate.getDate() + 1);
    }
    return count;
}

const now = new Date()
const thisYear = now.getFullYear()
const [startDate, endDate] = [new Date(`01/01/${thisYear}`), new Date(`12/31/${thisYear}`)]

export default getBusinessDatesCount(startDate, endDate)
