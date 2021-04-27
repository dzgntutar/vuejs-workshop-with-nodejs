const expreess = require("express")
// const bodyParser = require("body-parser");
//const cors = require("cors");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cors());

const app = expreess()
const port = process.env.port || 3000

let { todoList } =  require("./data") 

app.get("/",(request,response) => {
    response.status(200).send({
        todoList
    })
})


app.listen(port,() => {
    //console.log(process);
    console.log(`app başarılı bir şekilde ayağa kalktı. Port ${port}`)
})



