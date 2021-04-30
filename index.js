const mockRequest = new Promise((resolve, reject) => {
    resolve ('foo')
})

mockRequest.then(console.log)