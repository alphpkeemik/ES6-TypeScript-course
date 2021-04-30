function logger<Type>(arg: Type):Type {
    console.log(arg)
    return arg
}
const stringLogger = (arg:string) => logger<string>(arg)
const intLogger = (arg:number) => logger<number>(arg)

const fooIdentity = logger('foo')
stringLogger(fooIdentity)
const intIdentity = logger(1)
intLogger(intIdentity)