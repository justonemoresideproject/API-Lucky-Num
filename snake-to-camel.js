function snakeToCamel(str) {
    let returnString = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] != '_'){
            returnString += str[i]
        } else {
            i++
            returnString += str[i].toUpperCase(str[i])
        }
    }
    return returnString
}