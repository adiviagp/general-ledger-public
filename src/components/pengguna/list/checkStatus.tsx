import React from 'react';

import { Chip } from '@nextui-org/react';

const CheckStatus = ({ data }) => {
  const checkStatusLabel = (subDate: any) => {
    if (subDate <= 0) {
      return (
        <Chip className="capitalize" color="default" size="sm" variant="flat">
          Telah Berakhir
        </Chip>
      );
    }
    if (subDate <= 30) {
      return (
        <Chip className="capitalize" color={'danger'} size="sm" variant="flat">
          Segera Berakhir
        </Chip>
      );
    }
    if (subDate > 10) {
      return (
        <Chip className="capitalize" color={'success'} size="sm" variant="flat">
          Sedang Berjalan
        </Chip>
      );
    }
  };

  return checkStatusLabel(data);
};

export default CheckStatus;
