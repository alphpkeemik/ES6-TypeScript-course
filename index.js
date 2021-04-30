const mockRequest = new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject(new Error('Oh no, something went wrong'))
        resolve ('foo')
    }, 1500)

});
(async () => {
    const response = await mockRequest.then(value => value.split('').reverse().join(''))
    console.log({response})
})()