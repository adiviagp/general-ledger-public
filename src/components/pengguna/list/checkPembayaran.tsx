import React from 'react';

import { Chip } from '@nextui-org/react';

const CheckPembayaran = ({ data }) => {
  return (
    <Chip className="capitalize" color={data?.isPaid === 'Lunas' ? 'success' : 'danger'} size="sm" variant="flat">
      {data?.isPaid}
    </Chip>
  );
};

export default CheckPembayaran;
