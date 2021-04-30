const mockRequest = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Oh no, something went wrong'))
        resolve ('foo')
    }, 1500)

});
(async () => {
    try {
        const response = await mockRequest.then(value => value.split('').reverse().join(''))
        console.log({response})
    }catch(e) {
        console.log('caught an error!')
    }


})()