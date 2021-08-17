import { GraphQLServer } from 'graphql-yoga';
import { Query, Post, User, Picture, Mutation, AnimalUnion } from "./graphql/resolvers";

const server = new GraphQLServer({
	typeDefs: './src/graphql/schema.graphql',
	resolvers: {
		Query,
		Mutation,
		Post,
		User,
		Picture,
		AnimalUnion
	}
});

server.start(() => {
	console.log('And running running');
})
