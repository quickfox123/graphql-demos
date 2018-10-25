const { agentData } = require('./model/agentData')
const { clientData } = require('./model/clientData')

const resolvers = {
    Query: {
       agentData:() => agentData,
       clientData: () => clientData
    }
  };


module.exports.resolvers=resolvers