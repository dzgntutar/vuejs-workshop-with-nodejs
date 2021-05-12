const expreess = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = expreess();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.port || 3000;

let { todoList } = require("./data");
const { uid } = require("uid");

app.get("/", (request, response) => {
  response.status(200).send({
    todoList,
  });
});

app.post("/todo", (request, response) => {
  if (request.body.todo) {
    
      let todo = request.body.todo;
      todo.id = uid();

      todoList.push(todo);

    return response.status(201).send(todo)
  } else {
    return response.status(400).send({ message: "Bad request.." });
  }
});

app.listen(port, () => {
  //console.log(process);
  console.log(`app başarılı bir şekilde ayağa kalktı. Port ${port}`);
});
