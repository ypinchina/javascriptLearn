function imgLoad(url) {
    let img = document.createElement('img')
    img.src = url
    return new Promise((resolve, reject) => {
        img.onload = function (){
            resolve(img)
        }
        img.onerror = function () {
            let err = new Error(`图片加载失败: ${img.src}`)
            reject(err)
        }
    })
}
let url = 'https://vdposter.bdstatic.com/8baa568da9a485dada87f4ba51a04381.jpeg?x-bce-process=image/resize,m_fill,w_242,h_182/format,f_jpg/quality,Q_100'
let url2 = 'https://i1.hdslb.com/bfs/archive/da244ad2aece554cc4caf5637de95b60d7a9bd37.jpg@336w_190h.webp'
imgLoad(url).then(res => {
    console.log(res.width)
    return res
}).then(res => {
    console.log(res.height)
}).catch(err => {
    console.error(err)
})



imgLoad(url).then(res => {
    console.log(res.width)
    return res
}).then(res => {
    console.log(res.height)
    return imgLoad(url2)
}).then(res => {
    console.log(res.width)
    return res
}).then(res => {
    console.log(res.height)
}).catch(err => {
    console.log(err)
})