export const cleanData = (data) => {
  const updateData = data.map(obj => {
    obj.isFavorited = false
    return obj
  })
  return checkFavoritedPosts(updateData)
}

const checkFavoritedPosts = (data) => {
  // console.log('data', data)
  const favoritedPostsKeys = Object.keys(localStorage)
  // console.log('favoritedPostsKeys', favoritedPostsKeys)
  const updatedData = data.reduce((arr, post) => {
    if (favoritedPostsKeys.includes(post.title)) {
      post.isFavorited = true;
    }
    arr.push(post)
    return arr
  }, [])
  // console.log('updatedData', updatedData)
  return updatedData
}