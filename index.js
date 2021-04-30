const mockRequest = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Oh no, something went wrong'))
        resolve ('foo')
    }, 1500)

})

mockRequest
    .then(console.log)