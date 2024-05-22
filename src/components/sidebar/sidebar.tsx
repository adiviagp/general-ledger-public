import React from 'react';
import { Sidebar } from './sidebar.styles';
import { Avatar, Tooltip } from '@nextui-org/react';
import { CompaniesDropdown } from './companies-dropdown';
import { HomeIcon } from '../icons/sidebar/home-icon';
import { PaymentsIcon } from '../icons/sidebar/payments-icon';
import { BalanceIcon } from '../icons/sidebar/balance-icon';
import { AccountsIcon } from '../icons/sidebar/accounts-icon';
import { CustomersIcon } from '../icons/sidebar/customers-icon';
import { ProductsIcon } from '../icons/sidebar/products-icon';
import { ReportsIcon } from '../icons/sidebar/reports-icon';
import { DevIcon } from '../icons/sidebar/dev-icon';
import { ViewIcon } from '../icons/sidebar/view-icon';
import { SettingsIcon } from '../icons/sidebar/settings-icon';
import { CollapseItems } from './collapse-items';
import { SidebarItem } from './sidebar-item';
import { SidebarMenu } from './sidebar-menu';
import { FilterIcon } from '../icons/sidebar/filter-icon';
import { ChangeLogIcon } from '../icons/sidebar/changelog-icon';
import { useSidebarContext } from '@src/layouts/layout-context';
import { useLocation, useParams } from 'react-router-dom';
import { useDateStore, usePengguna } from '@src/main';
import DateSingle from '../zustand/dateSingle';

export const SidebarWrapper = () => {
  const router = useLocation();
  const params = useParams();
  const { collapsed, setCollapsed } = useSidebarContext();
  const { pengguna } = usePengguna();

  return (
    <aside className="h-screen sticky top-0">
      {collapsed ? <div className={Sidebar.Overlay()} onClick={setCollapsed} /> : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <img src="logo.png" />
        </div>
        {/* <div className="mt-8 p-2">
          Simulasi Tanggal
          <DateSingle />
        </div> */}
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarMenu title="Menu">
              <SidebarItem title="Ringkasan Bisnis" icon={<HomeIcon />} isActive={router.pathname === '/'} href="/" />
              {/* <SidebarItem isActive={router.pathname === '/pemodal' || router.pathname === '/pemodal/add' || router.pathname === '/pemodal/' + params?.id + '/edit'} title="Pemodal" href="pemodal" icon={<PaymentsIcon />} /> */}

              <SidebarItem
                isActive={
                  router.pathname === '/tenant' || router.pathname === '/tenant/add/individual' || router.pathname === '/tenant/add/perusahaan' || router.pathname === '/tenant/' + params?.id + '/edit'
                }
                title="Tenant"
                href="tenant"
                icon={<ProductsIcon />}
              />

              <SidebarItem
                isActive={
                  router.pathname === '/jurnal' ||
                  router.pathname === '/jurnal/jurnal-umum' ||
                  router.pathname === '/jurnal/jurnal-umum/add' ||
                  router.pathname === '/jurnal/jurnal-umum/' + params?.id + '/edit' ||
                  router.pathname === '/jurnal/jurnal-umum/uang-muka-sewa' ||
                  router.pathname === '/jurnal/jurnal-umum/uang-muka-sewa/add' ||
                  router.pathname === '/jurnal/jurnal-umum/uang-muka-sewa/' + params?.id + '/edit' ||
                  router.pathname === '/jurnal/jurnal-umum/pendapatan' ||
                  router.pathname === '/jurnal/jurnal-umum/pendapatan/add' ||
                  router.pathname === '/jurnal/jurnal-umum/pendapatan/' + params?.id + '/edit' ||
                  router.pathname === '/jurnal/jurnal-umum/modal' ||
                  router.pathname === '/jurnal/jurnal-umum/modal/add' ||
                  router.pathname === '/jurnal/jurnal-umum/modal/' + params?.id + '/edit' ||
                  router.pathname === '/jurnal/jurnal-umum' ||
                  router.pathname === '/jurnal/jurnal-umum/add' ||
                  router.pathname === '/jurnal/jurnal-umum/' + params?.id + '/edit' ||
                  router.pathname === '/jurnal/jurnal-pembalik' ||
                  router.pathname === '/jurnal/jurnal-penyesuaian'
                }
                title="Jurnal"
                href="jurnal"
                icon={<ReportsIcon />}
              />

              <SidebarItem isActive={router.pathname === '/rekap-kontrak'} title="Rekap Kontrak" href="rekap-kontrak" icon={<PaymentsIcon />} />

              <SidebarItem isActive={router.pathname === '/buku-besar'} title="Buku besar" href="buku-besar" icon={<PaymentsIcon />} />
              <SidebarItem isActive={router.pathname === '/neraca-saldo'} title="Neraca Saldo" href="neraca-saldo" icon={<PaymentsIcon />} />
              <CollapseItems icon={<BalanceIcon />} title="Laporan">
                <SidebarItem isActive={router.pathname === '/laba-rugi'} title="Laba Rugi" href="laba-rugi" icon={<DevIcon />} />
                <SidebarItem isActive={router.pathname === '/neraca'} title="Neraca" href="neraca" icon={<ViewIcon />} />
                {/* <SidebarItem isActive={router.pathname === '/arus-kas'} title="Arus Kas" href="arus-kas" icon={<ChangeLogIcon />} /> */}
              </CollapseItems>
            </SidebarMenu>

            <SidebarMenu title="Setting">
              <SidebarItem
                isActive={router.pathname === '/akun' || router.pathname === '/akun/' + params?.id + '/edit' || router.pathname === '/akun/add'}
                title="Akun"
                href="akun"
                icon={<SettingsIcon />}
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};
