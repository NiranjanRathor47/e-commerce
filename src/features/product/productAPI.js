export function fetchAllProducts() {
  // TODO : we will not hard-code server URL here
  return new Promise(async (resolve) =>{
   const response = await fetch('http://localhost:5000/products')
   const data = await response.json()
   resolve({data})
}
  );
}
 
export function fetchProductsByFilters(filter) {
  // filter = {"category":"smartphone"}
  let queryString = '';
  for(let key in filter){
    queryString += `${key}=${filter[key]}&`
  }
  // TODO : we will not hard-code server URL here
  return new Promise(async (resolve) =>{
   const response = await fetch('http://localhost:5000/products?'+queryString)
   const data = await response.json()
   resolve({data})
}
  );
}
 