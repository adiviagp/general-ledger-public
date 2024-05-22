import React from 'react';
const columns = [
  { name: 'DATE', uid: 'date' },
  { name: 'AKUN', uid: 'akunId' },
  { name: 'TENANT', uid: 'tenantId' },
  { name: 'DESCRIPTION', uid: 'keterangan' },
  { name: 'DEBIT', uid: 'debit' },
  { name: 'CREDIT', uid: 'credit' },
  { name: 'ACTIONS', uid: 'actions' },
];

const users = [
  {
    id: 1,
    date: '25/10/2023',
    akun: '11110001',
    tenant: 'PT. Telkom',
    description: 'CASH',
    total: 'Rp. 15.000.000',
  },
  {
    id: 2,
    date: '25/10/2023',
    akun: '11110002',
    tenant: 'PT. Telkom',
    description: 'CASH',
    total: 'Rp. 15.000.000',
  },
  // {
  //   id: 2,
  //   name: 'Zoey Lang',
  //   role: 'Technical Lead',
  //   team: 'Development',
  //   status: 'paused',
  //   age: '25',
  //   avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  //   email: 'zoey.lang@example.com',
  // },
  // {
  //   id: 3,
  //   name: 'Jane Fisher',
  //   role: 'Senior Developer',
  //   team: 'Development',
  //   status: 'active',
  //   age: '22',
  //   avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
  //   email: 'jane.fisher@example.com',
  // },
  // {
  //   id: 4,
  //   name: 'William Howard',
  //   role: 'Community Manager',
  //   team: 'Marketing',
  //   status: 'vacation',
  //   age: '28',
  //   avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
  //   email: 'william.howard@example.com',
  // },
  // {
  //   id: 5,
  //   name: 'Kristen Copper',
  //   role: 'Sales Manager',
  //   team: 'Sales',
  //   status: 'active',
  //   age: '24',
  //   avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
  //   email: 'kristen.cooper@example.com',
  // },
];

export { columns, users };
