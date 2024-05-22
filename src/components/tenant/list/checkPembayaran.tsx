import React from 'react';

import { Chip } from '@nextui-org/react';

const CheckPembayaran = ({ data }) => {
  return (
    <>
      {data ? (
        <Chip className="capitalize" color={data?.isPaid === 'Lunas' ? 'success' : 'danger'} size="sm" variant="flat">
          {data?.isPaid}
        </Chip>
      ) : null}
    </>
  );
};

export default CheckPembayaran;
