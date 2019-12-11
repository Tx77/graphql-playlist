const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//* allow cross-origin requests
app.use(cors());

//* connect to mongodb database
mongoose
  .connect(
    "mongodb+srv://Taylormm:520hanjiaren@cluster0-jigdq.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("Connected to MongoBD Atlas");
  })
  .catch(err => {
    console.log("Error: ", err.message);
  });

// mongoose.connect(
//   "mongodb+srv://Taylormm:520hanjiaren@cluster0-jigdq.mongodb.net/test?retryWrites=true&w=majority"
// );
// mongoose.connection.once("open", () => {
//   console.log("Connected to database");
// });

// mongodb+srv://Taylormm:520hanjiaren@cluster0-jigdq.mongodb.net/test?retryWrites=true&w=majority

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
