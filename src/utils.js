const formatCustomDate = (date) => {
  return `
    ${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}/${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }/${date.getFullYear()}
  `;
};

const stringToDate = (string) => {
  const [year, month, day] = string.split("-")
  return new Date(year, month - 1, day)
}

export { formatCustomDate, stringToDate};
