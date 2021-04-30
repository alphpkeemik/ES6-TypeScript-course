function stringLogger(arg:string) {
    console.log(arg)
    return arg
}

const fooIdentity = stringLogger('foo')
const oneIdentity = stringLogger(1)