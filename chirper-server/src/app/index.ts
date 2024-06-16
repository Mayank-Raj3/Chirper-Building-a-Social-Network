import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";

async function initServer() {
  const app = express();
  app.use(bodyParser.json());

  const typeDefs = `
    type Query {
      sayHello: String
      sayHelloToMe(name:String!): String
    }
  `;

  const resolvers = {
    Query: {
      sayHello: () => "Hello from GraphQL server",
      sayHelloToMe: (parent: any, { name }: { name: string }) =>
        `Hellow ${name}`,
    },
  };

  const graphqlServer = new ApolloServer({ typeDefs, resolvers });

  await graphqlServer.start();
  app.use("/graphql", expressMiddleware(graphqlServer));

  return app;
}

export default initServer;
