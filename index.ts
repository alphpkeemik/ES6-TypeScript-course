function stringLogger(arg: any) {
    console.log(arg)
    return arg
}

const fooIdentity: string = stringLogger('foo')
