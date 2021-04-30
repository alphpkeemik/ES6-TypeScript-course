const mockRequest = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ('foo')
    }, 1500)

})

mockRequest.then(console.log)