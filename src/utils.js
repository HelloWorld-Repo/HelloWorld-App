const formatCustomDate = (date) => {
  return `
    ${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}/${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }/${date.getFullYear()}
  `;
};

const stringToDate = (string) => {
  const [year, month, day] = string.split('-');
  return new Date(year, month - 1, day);
};

const getDifferentsValuesOfKey = (array, key) => {
  const newArray = array.map((item) => item[key]);
  return newArray.filter((value, index, self) => self.indexOf(value) === index);
};

export { formatCustomDate, stringToDate, getDifferentsValuesOfKey };
