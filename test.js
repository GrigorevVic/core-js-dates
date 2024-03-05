/*
function getWeekNumberByDate(date) {
    const currentYear = date.getFullYear();
    const beginYear = new Date(currentYear, 0, 1);
    
    const diff = Math.abs(date.getTime() - beginYear.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24 * 7)); 
    return diffDays;

}
*/
/*


/*
      assert.equal(tasks.getCountWeekendsInMonth(5, 2022), 9);
      assert.equal(tasks.getCountWeekendsInMonth(12, 2023), 10);
      assert.equal(tasks.getCountWeekendsInMonth(1, 2024), 8);
      assert.equal(tasks.getCountWeekendsInMonth(5, 2024), 8);
      assert.equal(tasks.getCountWeekendsInMonth(6, 2023), 8);
      assert.equal(tasks.getCountWeekendsInMonth(7, 2023), 10);
      assert.equal(tasks.getCountWeekendsInMonth(8, 2020), 10);
      assert.equal(tasks.getCountWeekendsInMonth(9, 2020), 8);
      assert.equal(tasks.getCountWeekendsInMonth(10, 2015), 9);
      assert.equal(tasks.getCountWeekendsInMonth(11, 2000), 8);
      assert.equal(tasks.getCountWeekendsInMonth(12, 1990), 10);
*/

function getCountWeekendsInMonth(month, year) {
  const totalDays = new Date(year, month, 0).getDate();
  let currMonth = month - 1;
  let count = 0;
  for (let i = 1; i <= totalDays; i += 1) {
    let curDay = new Date(year, currMonth, i);
      currMonth = curDay.getMonth();
      if (curDay.getDay() === 0 || curDay.getDay() === 6) count += 1;
     // if (currMonth === nextMonth) continue;
  }
  return count;
}


console.log(getCountWeekendsInMonth(6, 2023));