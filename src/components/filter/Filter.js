export const favoriteCars = (data, favorite) => {
  return favorite?.length === 0
    ? []
    : data?.filter(item => favorite.includes(item.id));
};

export const priceRangeCurrent = data => [
  ...new Set(
    data?.map(item => +item.rentalPrice.slice(1)).sort((a, b) => a - b)
  ),
];

export const priceRange10 = data =>
  data.length === 0
    ? []
    : [
        ...Array(
          Math.ceil(
            (Math.max(...data?.map(item => +item.rentalPrice.slice(1))) -
              Math.min(...data?.map(item => +item.rentalPrice.slice(1)))) /
              10
          ) + 1
        ),
      ].map(
        (e, i) =>
          Math.ceil(
            Math.min(...data?.map(item => +item.rentalPrice.slice(1))) / 10
          ) *
            10 +
          i * 10
      );

export const makesList = data =>
  data?.length === 0 ? [] : [...new Set(data?.map(item => item.make))].sort();

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
