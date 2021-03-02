export function ToCamelCase(str){
    let out=""
    let upper = true
    for (let i of str){
        if(upper){
            out+=i.toUpperCase()
            upper=false
        }
        else if(i===" "){
            upper=true
            out+=i.toLowerCase()
        }
        else{
            out+=i.toLowerCase()
        }
    }
    return out
}

//Compare strings capitalization independently
export function compareStrings(str1, str2){
    let s1 = str1.toString()
    let s2 = str2.toString()
    if((s1.toUpperCase()).includes(s2.toUpperCase())){
        return true
    }
    else{
        return false
    }
}