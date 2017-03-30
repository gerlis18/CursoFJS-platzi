
const nombre = "Gerlis"
const dias = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sábado",
    "domingo"
]

function correr() {
    const min = 5
    const max = 15
    return Math.round(Math.random() * (max - min)) + min //0 * 10 + 5 ó 10
}

let totalKms = 0;
const size = dias.length;
for (let i = 0; i < size; i++) {
    const kms = correr();
    totalKms += kms
    console.log(`El dia ${dias[i]} ${nombre} corrió ${kms}kms`);
}

const promedioKms = totalKms / size
console.log(`En promedio, ${nombre} corrió ${promedioKms.toFixed(2)}Kms`);
