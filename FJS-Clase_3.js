
function platzom(str){
    let translaation = str

    //si la palabra termina en "ar", se le quitan esos dos caracteres
    if (str.toLowerCase().endsWith('ar')) {
        translaation = str.slice(0, -2) //Slice() => corta letras de un String
    }

    //Si la palabra inicia con Z, se le añade "pe" al final
    if (str.toLowerCase().startsWith('z')) {
        translaation += 'pe'
    }

    //Si la palabrar traducida tiene 10 o mas letras
    //Se debe partir a la midar y unir con guion del medio
    const lenght = translaation.length
    if (lenght >= 10) {
        const firstHalf = translaation.slice(0, Math.round(lenght / 2))
        const secondHalf = translaation.slice(Math.round(lenght / 2))
        translaation = `${firstHalf}-${secondHalf}`
    }

    //Si la palabra original es un palindromo
    //ningura regla anterios cuenta y se devuelve
    //la misma palabra intercalando mayusculas y minusculas
    const reverse = (str) => str.split('').reverse().join('')
    
    function minMay(str) {
        const lenght = str.length
        //let translaation = ''
        let capitalize = true
        for (let i = 0; i < lenght; i++) {
            const char = str.charAt(i)
            translaation += capitalize ? char.toUpperCase() : char.toLowerCase()
            capitalize = !capitalize
        }

        return translaation
    }
    
    if (str == reverse(str)) {
        return minMay(str)
    }

    return translaation;
}

console.log(platzom('programar')); //program
console.log(platzom('Zorro')); //Zorrope
console.log(platzom('Zarpar')); //Zarppe
console.log(platzom('abecedario')); //abece-dario
console.log(platzom('sometemos')); //SoMeTeMoS
