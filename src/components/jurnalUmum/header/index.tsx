import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import ExportDropdown from '@src/components/dropdown/export';
import React from 'react';
import { Link } from 'react-router-dom';

const animals = [
  {
    label: 'Hari ini',
    value: 'hari ini',
  },
  {
    label: 'Bulan Ini',
    value: 'Bulan Ini',
  },
  {
    label: 'Custom',
    value: 'Custom',
  },
];
const Header = () => {
  return (
    <div className="flex flex-wrap gap-4 items-end mb-8">
      <div className="flex items-end gap-2 flex-auto">
        <Select
          variant="bordered"
          labelPlacement="outside"
          label="Tanggal"
          placeholder="Select Tanggal"
          className="max-w-xs"
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          variant="bordered"
          labelPlacement="outside"
          label="Akun"
          placeholder="Select Akun"
          className="max-w-xs"
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <Button color="primary">Filter</Button>
      </div>
      <div className="md:flex-auto flex gap-2 justify-end">
        {/* <ExportDropdown /> */}
        <Link to="/jurnal/jurnal-umum/add">
          <Button color="success" className="text-white">
            Tambah Jurnal
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
