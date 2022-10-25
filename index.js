//insert data to local storage, use setItem method with 2 params (key: value)
localStorage.setItem("nome", "jeff")
localStorage.setItem("name2", "pedro")
localStorage.setItem("name3", "carlos")

//we can restart the browser without lose the storaged data.

//to bring data from storage.
const teste = localStorage.getItem("nome")

console.log(teste);

//try to get item that doesn't exists 

const lastName = localStorage.getItem("sobreNome")

console.log(`this is the result for items that doesn't exists in local storage. > ${lastName} <`); //null

//fixing the null get
if (!lastName) {
    console.log('testing');
}

const removeMe = "removeMe"
// clear item
localStorage.setItem("ItemToRevmove", removeMe)
localStorage.removeItem("ItemToRevmove")

//clear all items
localStorage.setItem("firstValue", 1)
localStorage.setItem("secondValue", 2)

// Removes all key/value pairs, if there are any.
localStorage.clear()