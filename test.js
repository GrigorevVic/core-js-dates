/*
function getWeekNumberByDate(date) {
    const currentYear = date.getFullYear();
    const beginYear = new Date(currentYear, 0, 1);
    
    const diff = Math.abs(date.getTime() - beginYear.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24 * 7)); 
    return diffDays;

}
/ * '2024-02-01T15:00:00.000Z' => '2/1/2024, 3:00:00 PM'
 * '1999-01-05T02:20:00.000Z' => '1/5/1999, 2:20:00 AM'
 * '2010-12-15T22:59:00.000Z' => '12/15/2010, 10:59:00 PM'
 */
function formatDate(date) {
  const objDate = new Date(date);
  const time = objDate.getTime();
  const offset = objDate.getTimezoneOffset();
  const newDate = new Date(time + (offset * 60 * 1000));
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const hour = newDate.getHours() % 12 || 12;
  const min = newDate.getMinutes().toString();
  const sec = newDate.getSeconds().toString();
  const ampm = (newDate.getHours() >= 12) ? "PM" : "AM";
  return `${month}/${day}/${year}, ${hour}:${min.padStart(2, '0')}:${sec.padStart(2, '0')} ${ampm}`;
}


console.log(formatDate('1999-01-05T02:20:00.000Z'));