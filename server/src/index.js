import { GraphQLServer } from 'graphql-yoga';
import { Query, Post, User, Picture, Mutation } from "./graphql/resolvers";

const server = new GraphQLServer({
	typeDefs: './src/graphql/schema.graphql',
	resolvers: {
		Query,
		Mutation,
		Post,
		User,
		Picture
	}
});

server.start(() => {
	console.log('And running running');
})
