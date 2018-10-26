const { ApolloServer } = require('apollo-server-express')
const { importSchema } = require('graphql-import')


//import the Schema
const typeDefs  = importSchema('schema.graphql')

//Import the resolvers
const { resolvers } = require('./resolvers')

//Add express
const express = require('express');
const app = express();


//Create ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });


server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)