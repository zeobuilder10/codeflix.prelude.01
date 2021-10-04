function kebabCase(str=''): string {
    if (str.charAt(0) == '-') {
        str=str.slice(1)
        if (str.charAt(str.length - 1) == '-') {
            str=str.slice(0, str.length - 1)
        }
        return str.toLowerCase()
    } 
    var str2 = str.replace(/(?!^)([A-Z])/g, ' $1').replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase()
    return str2
}

console.log(kebabCase('love one code'))

console.log(kebabCase('LoveOneCode'))

console.log(kebabCase('-Love-One-Code-'))
