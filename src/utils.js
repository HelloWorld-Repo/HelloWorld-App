import moment from 'moment';

const formatCustomBrDate = (date) => moment(date).format('DD/MM/YYYY');
const formatCustomEnDate = (date) => moment(date).format('YYYY-MM-DD');

const stringToDate = (string) => {
  const [year, month, day] = string.split('-');
  return new Date(year, month - 1, day);
};

const getDifferentsValuesOfKey = (array, key) => {
  const newArray = array.map((item) => item[key]);
  return newArray.filter((value, index, self) => self.indexOf(value) === index);
};

export {
  formatCustomBrDate,
  stringToDate,
  getDifferentsValuesOfKey,
  formatCustomEnDate,
};
