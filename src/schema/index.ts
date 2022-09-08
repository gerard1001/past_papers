import { gql } from 'apollo-server-express';

const schema = gql`
	type Query {
		welcome: String!
	}
`;

export default [schema];
