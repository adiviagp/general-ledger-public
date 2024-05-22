
import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import Header from '@src/components/jurnalUmum/header';
import List from '@src/components/jurnalUmum/list';

const JurnalPembalikPage = () => {
  return (
    <>
      <h1>Jurnal Penutup</h1>
      <Card className="p-2">
        <CardBody>
          <Header />
          <List />
        </CardBody>
      </Card>
    </>
  );
};

export default JurnalPembalikPage;
