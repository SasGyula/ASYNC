import { getAdat } from "./async.js"

console.log("Gipsz Jakab")
getAdat("adatok.json", megjelenit)
getAdat("https://pokeapi.co/api/v2/pokemon/ditto", pokemonMegjelenit)

console.log("Nagy Géza")

function megjelenit(adat){
    console.log(adat.termek)
    $("body").append(`<h1>Adatok</h1>`)
    $("body").append(`<h2>${adat.termek[0].nev}</h2>`)
}

//callback függvény olyan függvény amelyeket asyncron hivasoknal masik függvény paramétereként kapott függvény

function pokemonMegjelenit(adat){
    console.log(adat)
    console.log(adat.name)
    $("body").append(`<h1>Adatok</h1>`)
    $("body").append(`<h2>${adat.name}</h2>`)
    $("body").append(`<img src="${adat.sprites.front_default}">`)
}