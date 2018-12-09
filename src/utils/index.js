let hxios = {
  baseUrl: 'https://autumnfish.cn/wx/',
  get(url) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.baseUrl + url, //开发者服务器接口地址"
        method: 'GET',
        dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
        success: res => {
          resolve(res)
        },
        fail: () => {
          reject()
        },
        complete: () => {}
      })
    })
  }
}

export default hxios
