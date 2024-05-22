import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import Table from '@src/components/akun/table';

const AkunPage = () => {
  return (
    <>
      <h1>Akun</h1>
      <Card className="p-2">
        <CardBody>
          <Table />
        </CardBody>
      </Card>
    </>
  );
};

export default AkunPage;
