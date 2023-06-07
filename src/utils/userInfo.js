// use local storage to manage cart data
const addToDb = id => {
    let movieCart = {}
  
    //get the movie cart from local storage
    const storedCart = localStorage.getItem('movie-cart')
    if (storedCart) {
      movieCart = JSON.parse(storedCart)
    }
  
    // add quantity
    let quantity = movieCart[id]
    if (quantity) {
      quantity = quantity;
    } else {
      movieCart[id] = 1
    }
    localStorage.setItem('movie-cart', JSON.stringify(movieCart))
  }
  
  const getStoredCart = () => {
    let movieCart = {}
  
    //get the movie cart from local storage
    const storedCart = localStorage.getItem('movie-cart')
    if (storedCart) {
      movieCart = JSON.parse(storedCart)
    }
    return movieCart
  }
  
  const removeFromDb = id => {
    const storedCart = localStorage.getItem('movie-cart')
    if (storedCart) {
      const movieCart = JSON.parse(storedCart)
      if (id in movieCart) {
        delete movieCart[id]
        localStorage.setItem('movie-cart', JSON.stringify(movieCart))
      }
    }
  }
  
  const deletemovieCart = () => {
    localStorage.removeItem('movie-cart')
  }
  
  export { addToDb, getStoredCart, removeFromDb, deletemovieCart }