const express = require("express");
const { ApolloServer, gql, MockList } = require("apollo-server-express");
const casual = require("casual");

const PORT = 4000;

const app = express();

const typeDefs = gql`
  type Query {
    hello: String
    number: Int
    task: Task
    tasks: [Task]
  }

  type Task {
    id: ID!
    title: String
    description: String
  }
`;

const mocks = {
  // this should be generate random list 1 until 4
  Query: () => ({
    tasks: () => new MockList([1, 4]),
  }),
  String: () => casual.text,
  Int: () => casual.integer((from = 0), (to = 11)),
  Task: () => ({
    id: casual.integer((from = 0), (to = 10)),
    title: casual.title,
    description: casual.description,
  }),
};

const server = new ApolloServer({ typeDefs, mocks });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
