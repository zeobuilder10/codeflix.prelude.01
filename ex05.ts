function decapitalize(str=''): string {
    const str2 = str.charAt(0).toLowerCase() + str.slice(1)
    return str2
}

console.log(decapitalize('Woonan'))

console.log(decapitalize('El Drago'))