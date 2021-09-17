export const cleanData = (data) => {
  const updateData = data.map(obj => {
    obj.isFavorited = false
    return obj
  })
  return checkFavoritedPosts(updateData)
}

const checkFavoritedPosts = (data) => {
  const favoritedPostsKeys = Object.keys(localStorage)
  const updatedData = data.reduce((arr, post) => {
    if (favoritedPostsKeys.includes(post.title)) {
      post.isFavorited = true;
    }
    arr.push(post)
    return arr
  }, [])
  return updatedData
}