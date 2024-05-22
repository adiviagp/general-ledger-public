import React from 'react';
const columns = [
  { name: 'AKUN', uid: 'akun' },
  { name: 'LABEL', uid: 'label' },
  { name: 'POSISI', uid: 'posisi' },
  { name: 'SALDO AWAL', uid: 'saldoAwal' },
  { name: 'ACTIONS', uid: 'actions' },
];

const users = [
  {
    id: 1,
    akun: '10001',
    label: 'CASH'
  },
  {
    id: 2,
    akun: '10002',
    label: 'CASH'
  },
  {
    id: 3,
    akun: '10003',
    label: 'CASH'
  },
];

export { columns, users };
