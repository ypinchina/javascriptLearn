//以promise封装ajax
function ajax(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          resolve(xhr)
        } else if(xhr.status === 404) {
          reject('404错误')
        }
      }
    }
    xhr.send(null)
  })
}

ajax('./data/test.json').then(res => {
  console.log(res.response)
}).catch(err => {
  console.log(err)
})