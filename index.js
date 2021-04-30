const mockRequest = new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject(new Error('Oh no, something went wrong'))
        resolve ('foo')
    }, 1500)

})
const logger = arg => console.log(arg) || arg
mockRequest

    .then(arg => `bar and ${arg}`)
    .then(logger)
    .then(arg => console.log(`I went trough the entire promise chain and all I got was ${arg}`) )
    .catch(console.error)
    .finally(() => console.log(`finally`))