import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import ExportDropdown from '@src/components/dropdown/export';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex flex-wrap gap-4 items-end mb-8">
      <div className="flex items-end gap-2 flex-auto">
        {/* <Input variant="bordered" type="text" label="Cari Akun" placeholder="Cari Akun.." labelPlacement="outside" onClear={() => console.log('input cleared')} isClearable />
        <Button color="primary">Cari</Button> */}
      </div>
      <div className="md:flex-auto flex gap-2 justify-end">
        <Link to="/akun/add">
          <Button color="success" className="text-white">
            Tambah Akun
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
