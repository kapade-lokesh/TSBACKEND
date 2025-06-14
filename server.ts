import app from "./src/app";
import { config } from "./src/config/config";
import connectDB from "./src/config/connectDB";
 


//database connection
connectDB();

const startServer = () => {
  const port = config.port || 3000;

  app.listen(port, () => {
    console.log(`server started ${port}`);
  });
};

startServer();
