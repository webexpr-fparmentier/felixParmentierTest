import { Dict } from "../types";

/**
 * for a given filters key/value object, generates a callback function
 * @param filters
 * @returns (item: Dict) => boolean
 */
const filterProduct = (filters: Dict) => (product: Dict): boolean => {
  // todo: implement filter by `price` and `quantity`
  // todo: make filter by `name` a case-insensitive
  // return !filters.name || product.name.includes(filters.name) || product.quantity==Number(filters.quantity) ;
  return  Object.keys(filters).length === 0 || ((!filters.name || product.name.toLowerCase().includes(filters.name.toLowerCase())) && (!filters.quantity || product.quantity==filters.quantity) && (!filters.price || product.price==filters.price));
};

export default filterProduct;
