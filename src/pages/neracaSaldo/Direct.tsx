import React from 'react';
import { Link } from 'react-router-dom';

const Direct = ({ data }) => {
  return (
    <>
      {['220-10', '220-20'].includes(data) ? (
        <>
          {data === '220-10' ? (
            <Link to="/neraca-saldo/sewa-diterima-dimuka" className="text-primary">
              220-10
            </Link>
          ) : null}

          {data === '220-20' ? (
            <Link to="/neraca-saldo/deposit" className="text-primary">
              220-20
            </Link>
          ) : null}
        </>
      ) : (
        data
      )}
    </>
  );
};

export default Direct;
