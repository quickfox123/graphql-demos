const agentData =[
    {
      taxId: 123,
      name: 'Agent 1',
      client:[
        {
            hcid: 1,
            name: 'Raj',
            address: 'Fremont',
            policy: [
              {
                type: 'SENIOR',
                name: "Senior Policy",
                premiumAmount: 2500
              }, {
                type: 'SMALLGROUP',
                name: "Small Group Policy",
                premiumAmount: 1200
              }
            ]
        },
        {
          hcid: 2,
          name: 'Kumar',
          address: 'Pasadena',
          policy: [
            {
              type: 'JUNIOR',
              name: "Senior Policy",
              premiumAmount: 1200
            }, {
              type: 'RISK',
              name: "Risk Group Policy",
              premiumAmount: 200
            }
          ]
      }
      ]
    },
    {
      taxId: 456,
      name: 'Agent 2',
      client:[
        {
            hcid: 3,
            name: 'Raj',
            address: 'Fremont',
            policy: [
              {
                type: 'SENIOR',
                name: "Senior Policy",
                premiumAmount: 2500
              }, {
                type: 'SMALLGROUP',
                name: "Small Group Policy",
                premiumAmount: 1200
              }
            ]
        }
      ]
    }
  ];

  

module.exports.agentData=agentData