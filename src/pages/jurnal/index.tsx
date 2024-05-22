import React from 'react';
import { Card, CardBody, Link, Button } from '@nextui-org/react';

const JurnalPage = () => {
  return (
    <>
      <h1>Jurnal</h1>

      <div className="grid grid-cols-3 gap-4">
        <Card className="p-1 min-h-[150px]">
          <CardBody className="flex flex-col justify-around">
            <h3>jurnal umum / Jurnal Penutup</h3>
            <Button
              href="/jurnal/jurnal-umum"
              as={Link}
              color="primary"
              showAnchorIcon
              variant="solid"
            >
              Lihat Detail
            </Button>
          </CardBody>
        </Card>
        <Card className="p-1 min-h-[150px]">
          <CardBody className="flex flex-col justify-around">
            <h3>jurnal umum - Khusus Uang Muka Sewa</h3>
            <Button
              href="/jurnal/jurnal-umum/uang-muka-sewa"
              as={Link}
              color="primary"
              showAnchorIcon
              variant="solid"
            >
              Lihat Detail
            </Button>
          </CardBody>
        </Card>
        <Card className="p-1 min-h-[150px]">
          <CardBody className="flex flex-col justify-around">
            <h3>jurnal umum - Khusus Pendapatan</h3>
            <Button
              href="/jurnal/jurnal-umum/pendapatan"
              as={Link}
              color="primary"
              showAnchorIcon
              variant="solid"
            >
              Lihat Detail
            </Button>
          </CardBody>
        </Card>
        {/* <Card className="p-1 min-h-[150px]">
          <CardBody className="flex flex-col justify-around">
            <h3>jurnal umum - Khusus Modal</h3>
            <Button
              href="/jurnal/jurnal-umum/modal"
              as={Link}
              color="primary"
              showAnchorIcon
              variant="solid"
            >
              Lihat Detail
            </Button>
          </CardBody>
        </Card> */}

        {/* <Card className="p-1 min-h-[150px]">
          <CardBody className="flex flex-col justify-around">
            <h3>jurnal Penutup</h3>
            <Button
              href="/jurnal/jurnal-penutup"
              as={Link}
              color="primary"
              showAnchorIcon
              variant="solid"
            >
              Lihat Detail
            </Button>
          </CardBody>
        </Card> */}
      </div>
    </>
  );
};

export default JurnalPage;
