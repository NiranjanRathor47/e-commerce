export function fetchAllProducts() {
  // TODO : we will not hard-code server URL here
  return new Promise(async (resolve) =>{
   const response = await fetch('http://localhost:5000/products')
   const data = await response.json()
   resolve({data})
}
  );
}
 
export function fetchProductsByFilters(filter,sort) {
  // filter = {"category":["smartphone","laptop"]}
  // sort = {_sort:"price",_order="desc"}

  // TODO : on server we will support multi values
  let queryString = '';
  for(let key in filter){
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCatgoryValues = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCatgoryValues}&`
    }
  }
  for(let key in sort){
    queryString += `${key} = ${sort[key]}&`
  }
  return new Promise(async (resolve) =>{
   const response = await fetch('http://localhost:5000/products?'+queryString)
   const data = await response.json()
   resolve({data})
}
  );
}
 