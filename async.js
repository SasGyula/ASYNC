export function getAdat(vegpont, callback) {
    fetch(vegpont)
        .then((valasz) => valasz.json())
        .then((adat) =>
            callback(adat)
        )
        .catch((error) => {
            console.log(error)
        }
        )
}