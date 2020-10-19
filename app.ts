const express = require("express");
const auth = require("./middleware/auth");
const mainRouter = require("./routers/mainRouter/mainRouter");
const pageNotFound = require("./middleware/pageNotFound");
const { errorMiddleware } = require("@reactor4/forklift");

const app = express();

app.use(express.json());

app.use(auth);

app.use("/", mainRouter);
app.use("*", pageNotFound);
app.use(errorMiddleware());

export default app
