module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vuex_todos/' // Thay tên repository của các bạn vào đây nhé
      : '/'
  }