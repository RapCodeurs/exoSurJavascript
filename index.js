/*var matrix = [[10, 20, 30, 40], [22, 10, 12, 14], [16, 18, 42, 22]];

for (let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        console.log(matrix[i][j])
    }
}

const lists = ['ne', 'mangue', 'papaye', 'anane', 'poire', 'citron'];

const ages = [23, 32, 12, 65, 17, 15, 70,];

function allEvry(nom){
    return nom.length < 4;
}


function addtion(a, b) {
    return a + b
}

const age1 = ages.reduce(addtion)
console.log(age1)

const all = lists.every(allEvry)
const all1= lists.some(allEvry)
console.log(all)
console.log(all1)

/*function element (age){
    return age >= 17
}

const newage = ages.filter(element)
console.log(newage)



function affiche(mot, index, resultat){
    resultat = mot[index].toUpperCase() + mot.substring(1);
    console.log(resultat)
}

lists.forEach(affiche)


lists.forEach(el =>{
    let res = el[0].toUpperCase() + el.substring(1)
    console.log(res)
})
*/

const incrementer = document.getElementById('incrementer');
const decrementer = document.getElementById('décrementer');
const number = document.getElementById('number');
const stopOk = document.getElementById('stop');

let count = 0;

incrementer.addEventListener('click', () =>{
    count += 1;
    number.innerText = count;
    console.log('Vous avez augmenté d\'un chiffre !')
})

decrementer.addEventListener('click', () =>{
    count -= 1;
    number.innerText = count;
    console.log('Vous avez diminué le compteur !')
})

stopOk.addEventListener('click', () =>{
    count = 0;
    number.innerText = count;
    console.log('Vous avez arreté le compteur !')
})





