const mockRequestShort = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject(new Error('Oh no, something went wrong'))
        console.log('short')
        resolve('foo')
    }, 500)
});
const mockRequestMedium = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject(new Error('Oh no, something went wrong'))
        console.log('medium')
        resolve('foo')
    }, 1000)
});
const mockRequestLong = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject(new Error('Oh no, something went wrong'))
        console.log('long')
        resolve('foo')
    }, 1500)

});

(async () => {
    await mockRequestMedium()
    await mockRequestShort()


})()