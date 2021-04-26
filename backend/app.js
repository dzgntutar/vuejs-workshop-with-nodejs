const expreess = require("express")

const app = expreess()
const port = 3000

app.get("/",(request,response) => {
    response.status(200).send({
        name:"Düzgün Tutar"
    })
})


app.listen(port,() => {
    console.log("app başarılı bir şekilde ayağa kalktı")
})



