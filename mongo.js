const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@cluster0.lsbzxli.mongodb.net/test_noteApp?appName=Cluster0`;
mongoose.set("strictQuery", false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

const note = new Note({
  content: "HTML is easy",
  important: true,
});

note.save().then((result) => {
  console.log(result);
  console.log("note saved!");

  mongoose.connection.close();
});

// Note.find({ important: true }).then((result) => {
//   console.log("result", result, result.length);
//   result.forEach((note) => {
//     console.log(note);
//   });

//   mongoose.connection.close();
// });
