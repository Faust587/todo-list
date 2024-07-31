export const getActualData = () => {
  const date = new Date();

  return `${date.toLocaleString('default', {
    month: 'long',
  })} ${date.getDate()}, ${date.getFullYear()}`;
};
