const starWars7 = 'Star Wars: El despertar de la Fuerza',
 pgStarWars7 = 13,
 nameGerlis = 'Gerlis',
 ageGerlis = 19,
 nameSanti = 'Santi',
 ageSanti = 12;

const canWatchStarWars7 = (name, age, isWithAdult = false) => {
    if (age >= pgStarWars7) {
        alert(`${name} puede pasar a ver ${starWars7}`);
    } else if (isWithAdult) {
        alert(`${name} puede pasar a ver ${starWars7}.
            Aunque su edad es ${age}, se encuentra acompañado/a por un adulto`)
    } else {
        alert(`${name} no pude pasar a ver ${starWars7}.
            Tiene ${age} años y necesita tener ${pgStarWars7}`);
    }
}

canWatchStarWars7(nameGerlis, ageGerlis)
canWatchStarWars7(nameSanti, ageSanti, true)