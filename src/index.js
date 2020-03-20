import { DATABASE, PORT } from "babel-dotenv";
import app from "./app";
import path from "path";
import models from "./models";
const port = PORT || 3000;

models.sequelize.sync().then(function() {
  app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
});
