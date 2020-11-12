const app = require("./app");
const mongoose = require("mongoose");
const User = require("./models/user");

mongoose
  .connect("mongodb://localhost/HenryApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(app.get("port"), () => {
      console.log(`Server on port ${app.get("port")}`);
    });
  });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DB connected");
});

//--------------------------------SuperUser
const bcrypt = require("bcryptjs");

User.findOneAndUpdate(
  { name: "admin" },
  {
    name: "admin",
    email: "admin@henry.com",
    role: "admin",
    password: "admin",
  }, // document to insert when nothing was found
  { upsert: true, new: true, runValidators: true }, // options
  function (err, admin) {
    // callback
    if (err) {
      console.log(err);
    } else {
      console.log(
        "\n----Super-user---- \n #name: ",
        admin.name,
        "\n #email: ",
        admin.email,
        "\n #password: ",
        admin.password,
        "\n -----------------\n"
      );
    }
  }
);
