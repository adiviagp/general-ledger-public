import { addSeparator } from '@src/utils/fieldFormatter';

const Total = ({data, field}) => {
  return <div className="m-2">Total: {addSeparator(data)}</div>;
};

export default Total;
