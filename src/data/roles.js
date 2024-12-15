const roles = [
  {
    id: '1',
    name: 'Superadmin',
    type: 'DEFAULT',
    dateCreated: '2023-01-01',
    status: 'Active',
    lastActive: '2023-06-01'
  },
  {
    id: '2',
    name: 'Merchantadmin',
    type: 'DEFAULT',
    dateCreated: '2023-02-01',
    status: 'Active',
    lastActive: '2023-06-01'
  },
  {
    id: '3',
    name: 'Supportadmin',
    type: 'DEFAULT',
    dateCreated: '2023-02-01',
    status: 'Active',
    lastActive: '2022-10-01'
  },
  {
    id: '4',
    name: 'Developeradmin',
    type: 'SYSTEM-CUSTOM',
    dateCreated: '2023-05-01',
    status: 'Active',
    lastActive: '2023-07-01'
  }
];

module.exports = { roles };