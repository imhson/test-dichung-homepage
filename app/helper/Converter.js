function formatDate(d) {
  const result = `${formatNumber(d.getHours())}:${formatNumber(
    d.getMinutes(),
  )} ${formatNumber(d.getDate())}/${formatNumber(
    d.getMonth() + 1,
  )}/${formatNumber(d.getFullYear())}`;
  return result;
}
function formatNumber(number) {
  if (number < 10) {
    // eslint-disable-next-line no-param-reassign
    number = `0${number}`;
  }
  return number;
}
export { formatDate, formatNumber };
