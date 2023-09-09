export function fetchAllProducts() {
  // TODO : we will not hard-code server URL here
  return new Promise(async (resolve) =>{
   const response = await fetch('http://localhost:5000/products');
   const data = await response.json();
   resolve({data});
}
  );
}
 
export function fetchProductsByFilters(filter,sort,pagination) {
  // filter = {"category":["smartphone","laptop"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10}
  // TODO : on server we will support multi values in filter
  let queryString = '';
  for(let key in filter){
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCategoryValues = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValues}&`
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) =>{
    // TODO we will not hard code server url here
   const response = await fetch('http://localhost:5000/products?'+queryString);
   const data = await response.json();
   const totalItems = await response.headers.get('X-Total-Count');
   resolve({ data: { products: data, totalItems: +totalItems } });
}
  );
}
 