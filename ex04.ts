function capitalize(str='', restToLowerCase=false): string {
    const str2 = str.charAt(0).toUpperCase() + str.slice(1)
    if (restToLowerCase == true) {
        return str2.charAt(0) + str2.slice(1).toLowerCase()
    }
    return str2
}

console.log(capitalize('one Code'))

console.log(capitalize('One CODE', true))