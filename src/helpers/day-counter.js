const now = new Date();

export const thisYear = now.getFullYear();

const [yearBeginning, yearEnd] = [
  new Date(`01/01/${thisYear}`),
  new Date(`12/31/${thisYear}`)
];

const dayCounts = countDays(yearBeginning, yearEnd); // returns an object with keys corresponding to each day of the week 0-6 where 0=Sunday, and respective values which count how many of those occur during the specified date range, in our case Jan 01 - Dec 31 of this year. Object also supplies a thisYear value for use in the Calculator component.

export const weekdays = Object.values(dayCounts).reduce(
  (total, dayCount, index) => {
    if (index > 0 && index < 6) {
      return total + dayCount;
    }
    return total;
  }
);

// helpers
function countDays(startDate, endDate) {
  const yearInDays = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    currentDate = new Date(currentDate);
    yearInDays.push(currentDate.getDay());
    currentDate = currentDate.setDate(currentDate.getDate() + 1);
  }
  return yearInDays.reduce((counter, day) => {
    counter[day] ? counter[day]++ : (counter[day] = 1);
    return counter;
  }, {});
}
