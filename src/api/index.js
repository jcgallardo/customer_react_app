//export const apiGet = (url) => () => fetch(url).then(v => v.json())
export const apiGet = (url) => () => {
    return [{
        dni:"22233355",
        name:"Juan Carlos",
        ciudad:"Madrid",
        age: 26
    },{
        dni:"11122233",
        name:"Gema",
        ciudad:"Madrid",
        age: 25
    }]
}