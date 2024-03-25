const getWishlistData = () => {
  const getWishlist = localStorage.getItem("wishlist");
  if (getWishlist) {
    return JSON.parse(getWishlist);
  }
  return [];
};
const setWishlistData = (id) => {
    const getWishlist = getWishlistData();
    const addWishlist = [...getWishlist , id];
    const wishlistStringify = JSON.stringify(addWishlist);
    localStorage.setItem("wishlist" ,wishlistStringify)
}

export {setWishlistData , getWishlistData}