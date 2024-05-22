import { Input } from '@nextui-org/react';
import { addSeparator } from '@src/utils/fieldFormatter';
import moment from 'moment';
import { useEffect, useState } from 'react';

const FormSewaPerRow = ({ data }: any) => {
  const [isBetween, setIsBetween] = useState(false);

  useEffect(() => {
    // console.log(object);
    // console.log(moment([data?.endDate]).diff(moment(data?.startDate), 'months', true));
  }, []);

  const getMonthDiff = () => {
    return moment(data?.endDate).diff(moment(data?.startDate), 'months', true);
  };

  return <div className="m-2">{getMonthDiff() >= 1 ? "Rp. " + addSeparator(data?.hargaSewa / getMonthDiff()) : '-'}</div>;
};

export default FormSewaPerRow;
