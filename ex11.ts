function last(str='', len=1): string {
    if (len >= str.length) {
        return str
    } else {
        return str.slice(str.length - len, str.length)
    }
}

console.log(last('chopper'))

console.log(last('chopper', 2))

console.log(last('tony', 5))