import express from "express";
import morgan from "morgan";
import env_config from "./config";
import routeHandler from "./middleware/route-handler";
import errorHandler from "./middleware/error-handler";
import goalRouter from "./routers/goals/goals.route";

const app = express();

app.use(express.json());

if (env_config.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api", goalRouter);

app.all("*", routeHandler);
app.use(errorHandler);

app.listen(env_config.PORT, () => {
  console.log(`Server is running on PORT:${env_config.PORT}`);
});
