// const test = () => {
//     var name = ""
//     setTimeout(() =>{
//         name = "kunle"
//     }, 3000)
//     console.log(1)
//     setTimeout(console.log("kunle"), 3000)
//     console.log(name)
// }

const test = async () =>{
    const url = "https://jsonplaceholder.typicode.com/users"
    const url2 = "https://api.github.com/users"
    let repsonse = await fetch(url2)

    let jsonresponse = await Response.json()
    console.log(jsonresponse)
}