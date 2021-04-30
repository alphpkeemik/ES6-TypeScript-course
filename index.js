const mockRequest = new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject(new Error('Oh no, something went wrong'))
        resolve ('foo')
    }, 1500)

})

mockRequest
    .catch(console.error)
    .then(arg => 'bar')
    .then(console.log)