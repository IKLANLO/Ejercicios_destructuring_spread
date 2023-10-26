const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];
const [luis, ana, andrea] = empleados
console.log(ana)
console.log(luis.email)

const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}
const {name:nombre,type,moves} = pokemon
console.log(nombre, type, moves[1])

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}
const {type:tipo, ability:habilidad, stats:estadisticas, moves:movimientos} = pokemon
console.log({nombre, tipo, habilidad, estadisticas, movimientos, ...pikachu})

function sumAllNumbers(...nums){
    const arrNums = [...nums]
    console.log(arrNums.reduce((accumulator, currentValue) => accumulator + currentValue))
}
sumAllNumbers(6, 8, 2, 3, 1)
sumAllNumbers(11, 3, 12)

function addOnlyNums(...args){
    const arrArgs = [...args]
    let sum = 0
    for(let i = 0; i < arrArgs.length; i++){
        if(typeof arrArgs[i] === 'number'){
            sum += arrArgs[i]
        }
    }
    console.log(sum)  
}
addOnlyNums(1, 'perro', 2, 4)

function countTheArgs(...theArgs){
    const arrTheArgs = [...theArgs]
    console.log(arrTheArgs.length)
}
countTheArgs('gato', 'perro')
countTheArgs('gato', 'perro', 'pollo', 'oso')

// EXTRAS

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};
const {today:maximaHoy,tomorrow:maximaManana} = HIGH_TEMPERATURES
console.log(maximaHoy)
console.log(maximaManana)

function onlyUniques(...args) {
    const arrArgs = [...args]
    let newArr = []
    arrArgs.forEach((e)=>{
        if(!newArr.includes(e)){
            newArr.push(e)
        }
    })
    console.log(newArr)
}
onlyUniques('gato', 'pollo', 'cerdo', 'cerdo')
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)

function combineAllArrays(...arr) {
    console.log([].concat(...arr))

}
combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1])
combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1])
