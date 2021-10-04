function snakeCase(str=''): string {
    if (str.charAt(0) == '-') {
        str=str.slice(1)
        if (str.charAt(str.length - 1) == '-') {
            str=str.slice(0, str.length - 1)
        }
        return str.replace(/-/g, '_').toLowerCase()
    } 
    var str2 = str.replace(/(?!^)([A-Z])/g, ' $1').replace(/[_\s]+(?=[a-zA-Z])/g, '_').toLowerCase()
    return str2
}

console.log(snakeCase('gold d roger'))

console.log(snakeCase('GoldDRoger'))

console.log(snakeCase('-Gold-D-Roger-'))
