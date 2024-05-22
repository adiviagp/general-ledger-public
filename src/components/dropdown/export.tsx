import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const ExportDropdown = ({ title, color, variant, options }: any) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant={variant} color={color} className={variant === 'solid' ? 'text-white' : ''}>
          {title} v
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {options?.map((option: any) => (
          <DropdownItem key={option.key}>
            <Link to={option.link || '/tenant'}>{option.title} </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ExportDropdown;
