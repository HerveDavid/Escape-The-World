const padTo2Digits = (num) => (num.toString().padStart(2, "0"))

export const getFormatDate = (num) => {
  const date = new Date(num);
  return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join(
    "/"
  );
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}