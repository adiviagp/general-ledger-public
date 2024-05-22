import classNames from 'classnames';
import React from 'react';

const SummaryCard = ({ title, value, color }) => {
  return (
    <div className={classNames("rounded shadow-md p-6 bg-white border-l-8", color)}>
      <h3 className='mb-2'>{title} </h3>
      <h2 className='font-bold text-2xl'>{value} Kontrak</h2>
    </div>
  );
};

export default SummaryCard;
