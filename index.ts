interface WithLength { length: number }

function logger<Type extends WithLength>(arg: Type):Type {
    console.log(arg.length, arg)
    return arg
}
const stringLogger = (arg:string) => logger<string>(arg)
//const intLogger = (arg:number) => logger<number>(arg)
const arrayLogger = (arg:any[]) => logger<any[]>(arg)

const fooIdentity = logger('foo')
stringLogger(fooIdentity)
//const intIdentity = logger(1)
//intLogger(intIdentity)
const arrayIdentity = logger(['banana'])
arrayLogger(arrayIdentity)