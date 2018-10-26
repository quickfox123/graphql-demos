const { agentData } = require('./model/agentData')
const { clientData } = require('./model/clientData')
const {  policyData } = require('./model/policyData')
const _ = require('lodash');

const resolvers = {
  Query: {
    agentData: () => agentData,
    clientData: () => clientData,
    getAgentById(root, args, context, info) {
      return _.find(agentData, {
        taxId: args.taxId
      });
    }
  },
  Agent: {
    client(agent) {
      return _.filter(clientData, {
        taxId: agent.taxId
      });
    }
  },
  Client: {
    policy(client) {
      return _.filter(policyData, {
        hcid: client.hcid
      });
    }
  }

};


module.exports.resolvers = resolvers