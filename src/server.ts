import { ApolloServer, gql } from 'apollo-server';
import {
	ApolloServerPluginLandingPageLocalDefault,
	// ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core';
import 'dotenv/config';

import resolvers from './resolvers';
import typeDefs from './schema';

export const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	plugins: [ApolloServerPluginLandingPageLocalDefault],
	cache: 'bounded',
});

const PORT: number = parseInt(process.env.PORT!) | 4004;

server.listen({ port: PORT }).then(({ url }): void => console.log(`Server ready at ${url}`));
