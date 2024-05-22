import { Input } from '@nextui-org/react';
import moment from 'moment';
import { useEffect, useState } from 'react';

const FormSaldoPerRow = ({data, date}: {data: any, date: any}) => {
  const [isBetween, setIsBetween] = useState(false)

  useEffect(() => {
    console.log(date);
    // let startDate = moment(data?.startData).format('YYYY-MM-DD')
    if(moment(date).isBetween(data?.startDate, data?.endDate)){
      setIsBetween(true);
    } else {
      setIsBetween(false);
    }
  
  }, [])
  
  return <div className="m-2">{isBetween ? "Butuh disesuaikan" : '-'}</div>;
};

export default FormSaldoPerRow;
