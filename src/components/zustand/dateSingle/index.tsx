import { useDateStore } from '@src/main';
import moment from 'moment';
import Datepicker from 'react-tailwindcss-datepicker';

const DateSingle = () => {
  const { date, setDate } = useDateStore();

  const handleValueChange = (newValue: any) => {
    setDate(newValue);
  };
  return (
    <div className="flex flex-col md:flex-row mb-3 flex-wrap">
      <div className="flex-1">
        <Datepicker
          useRange={false}
          asSingle={true}
          placeholder="Tanggal Mulai - Tanggal Berakhir"
          inputClassName="w-full rounded-xl border-3 px-2 py-4"
          primaryColor={'blue'}
          startFrom={new Date()}
          value={date}
          onChange={handleValueChange}
        />{' '}
      </div>
    </div>
  );
};

export default DateSingle;
