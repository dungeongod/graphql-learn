var  express =  require('express');
var graphqlHTTP =  require('express-graphql');
var { graphql, buildSchema } = require('graphql');
const schema = require('./schema')

var app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:  true
}));
app.listen(4000);
// graphql(Schema, `{ hello, nikhils }`,root).then((response)=>{
//     console.log(response)
// });