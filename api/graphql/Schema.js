import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import User from '../models/User';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          var user = new User({});

          user.save().then(result => {
            return result;
          }).error(err => {console.log(err)});

          return 'meow'
        }
      }
    }
  })
});

/*
 var root = {hello: () => 'Hello world!'};
 */


