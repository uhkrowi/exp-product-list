function filterProduct(products, filter = {}) {
  if (filter.fourRateMore) {
    products = products.filter((product) => product.attributes.rating >= 4);
  }
  if (filter.availStock) {
    products = products.filter((product) => product.attributes.stock > 0);
  }

  return products;
}

function sortProduct(products, sortBy) {
  if (sortBy == "review") {
    products = products.sort((a, b) => {
      if (a.attributes.rating > b.attributes.rating) return -1;
      else if (a.attributes.rating < b.attributes.rating) return 1;
      return 0;
    });
  } else if (sortBy == "newest") {
    products = products.sort((a, b) => {
      if (a.attributes.id > b.attributes.id) return -1;
      else if (a.attributes.id < b.attributes.id) return 1;
      return 0;
    });
  }

  return products;
}

export { filterProduct, sortProduct };
