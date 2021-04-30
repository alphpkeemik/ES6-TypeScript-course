const mockRequestShort = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject(new Error('Oh no, something went wrong'))
        console.log('short')
        resolve('short-r')
    }, 500)
});
const mockRequestMedium = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject(new Error('Oh no, something went wrong'))
        console.log('medium')
        resolve('medium-r')
    }, 1000)
});
const mockRequestLong = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject(new Error('Oh no, something went wrong'))
        console.log('long')
        resolve('long-r')
    }, 1500)

});

(async () => {
    const [medium, long, short] = await Promise.all([
        mockRequestMedium(),
        mockRequestLong(),
        mockRequestShort()
    ])
    console.log(medium, long, short)
    console.log('all')

})()