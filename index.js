// //1 - insert data into localStorage

// localStorage.setItem("NOME", "Jefferson")

// //2 - bring item from localStorage

// localStorage.getItem("NOME")

// //3 - bring item that doest exists

// const dont = localStorage.getItem("iDontExist")

// //solving

// if (!dont) {
//     console.log('I dont exists!');
// }

// //removing item
// localStorage.removeItem("NOME")

// //clear all items
// localStorage.setItem("A", 1)
// localStorage.setItem("B", 2)

// localStorage.clear()
// console.log('cleared all items!');


// // =======================================================================================

// sessionStorage.setItem("token", "HI2590128JKSU")
// // sessionStorage.getItem()
// // sessionStorage.removeItem()
// // sessionStorage.clear()

const user = {
    nome: "Jeff",
    idade: 23,
    profissao: "Dev"
}

const lsKey = "_USER_DATA"

let verify = localStorage.getItem(lsKey)

if (!verify) {
    verify = []
} else {
    verify = JSON.parse(verify)
}

verify.push(user)

localStorage.setItem(lsKey, JSON.stringify(verify))

const teste = localStorage.getItem(lsKey)
const data = JSON.parse(teste)

console.log(data[0].nome);
