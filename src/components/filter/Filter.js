export const favoriteCars = (data, favorite) => {
  return favorite.length === 0
    ? []
    : data?.filter(item => favorite.includes(item.id));
};

export const filterCars = (data, filter) => {
  const { brand = '', price = '', from = '', to = '' } = filter;

  if (brand === '' && price === '' && from === '' && to === '') return data;

  const filteredData = data?.filter(({ make, rentalPrice, mileage }) => {
    if (
      (brand === '' || brand === make) &&
      Number(price === '' ? Infinity : price) > Number(rentalPrice.slice(1)) &&
      Number(from === '' ? 0 : from) <= mileage &&
      Number(to === '' ? Infinity : to) >= mileage
    )
      return true;
    return false;
  });

  return filteredData;
};
