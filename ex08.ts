function swapCase (str=''): string {
    var str2 = ''
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == str.charAt(i).toUpperCase()) {
            str2 += str.charAt(i).toLowerCase()
        } else if (str.charAt(i) == str.charAt(i).toLowerCase()) {
            str2 += str.charAt(i).toUpperCase()
        }
    }
    return str2
}

console.log(swapCase('One Code'))

console.log(swapCase('1337 Fruits'))
