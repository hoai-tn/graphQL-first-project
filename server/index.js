const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { expressMiddleware } = require("@apollo/server/express4");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");

const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const resolvers = require("./resolver/resolvers");
const typeDefs = require("./schema/schema");
const mongoMethods = require("./databases/mongoDataMethods");

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  context: () => ({ mongoMethods }),
});

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tranngochoai02051999:Nartiaoh99@cluster0.xhfyel3.mongodb.net/"
    );
    console.log("connect to db successfully");
  } catch (error) {
    console.log(error);
  }
};
(async () => {
  await server.start();
  await connectDB();
  app.use(cors(), bodyParser.json(), expressMiddleware(server));

  app.get("/log", (req, res) => {
    res.send({ data: "hello" });
  });
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000`);
})();
