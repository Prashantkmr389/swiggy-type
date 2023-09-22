export function filterResturant(restuarantList, searchText) {
  return restuarantList.filter((restuarant) => {
    return restuarant.info.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
}

