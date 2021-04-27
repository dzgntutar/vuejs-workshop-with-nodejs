const { uid } = require("uid");

module.exports = {
  todoList: [
    {
      id: uid(),
      title: "Görev 1",
      content: "İçerik 1",
    },
  ],
};
