import { Route, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App';
import { Layout } from './layouts/Layout';
import PenerimaanPage from './pages/penerimaan';
import PengeluaranPage from './pages/pengeluaran';
import TenantPage from './pages/tenant';
import LabaRugiPage from './pages/labaRugi';
import ArusKasPage from './pages/arusKas';
import AkunPage from './pages/akun';
import AddTenantIndividualPage from './pages/tenant/individual/add';
import AddTenantPerusahaanPage from './pages/tenant/perusahaan/add';
import EditTenantPage from './pages/tenant/edit';
import JurnalPage from './pages/jurnal';
import JurnalUmumPage from './pages/jurnal/jurnalUmum';
import JurnalPembalikPage from './pages/jurnal/jurnalPembalik';
import JurnalPenyesuaianPage from './pages/jurnal/jurnalPenyesuaian';
import BukuBesarPage from './pages/bukuBesar';
import AddJurnalUmumPage from './pages/jurnal/jurnalUmum/add';
import AddJurnalPenyesuaianPage from './pages/jurnal/jurnalPenyesuaian/add';
import AddAkunPage from './pages/akun/add';
import EditJurnalUmumPage from './pages/jurnal/jurnalUmum/edit';
import NeracaSaldoPage from './pages/neracaSaldo';
import UangMukaSewaPage from './pages/uangMukaSewa';
import NeracaPage from './pages/neraca';
import EditAkunPage from './pages/akun/edit';
import JurnalUmumUangMukaPage from './pages/jurnal/jurnalUmumUangMuka';
import AddJurnalUmumUangMukaPage from './pages/jurnal/jurnalUmumUangMuka/add';
import EditJurnalUmumUangMukaPage from './pages/jurnal/jurnalUmumUangMuka/edit';
import JurnalUmumPendapatanPage from './pages/jurnal/jurnalUmumPendapatan';
import AddJurnalUmumPendapatanPage from './pages/jurnal/jurnalUmumPendapatan/add';
import EditJurnalUmumPendapatanPage from './pages/jurnal/jurnalUmumPendapatan/edit';
import PemodalPage from './pages/pemodal';
import AddPemodalPage from './pages/pemodal/add';
import JurnalUmumModalPage from './pages/jurnal/jurnalUmumModal';
import AddJurnalUmumModalPage from './pages/jurnal/jurnalUmumModal/add';
import EditJurnalUmumModalPage from './pages/jurnal/jurnalUmumModal/edit';
import LabaRugiSettingPage from './pages/labaRugiSetting';
import NeracaSettingPage from './pages/neracaSetting';
import EditPemodalPage from './pages/pemodal/edit';
import NewContract from './components/tenant/edit/new/newContract';
import NeracaSaldoUangMukaPage from './pages/neracaSaldo/uangMuka';
import NeracaSaldoDepositoPage from './pages/neracaSaldo/deposito';
import EditContract from './components/tenant/edit/editKontrak';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="penerimaan" element={<PenerimaanPage />} />
        <Route path="pengeluaran" element={<PengeluaranPage />} />

        <Route path="tenant" element={<TenantPage />} />
        <Route path="tenant/add/individual" element={<AddTenantIndividualPage />} />
        <Route path="tenant/add/perusahaan" element={<AddTenantPerusahaanPage />} />
        <Route path="tenant/:id/edit" element={<EditTenantPage />} />
        <Route path="tenant/:id/kontrak-baru" element={<NewContract />} />
        <Route path="kontrak/:id" element={<EditContract />} />

        <Route path="laba-rugi" element={<LabaRugiPage />} />
        <Route path="laba-rugi/setting" element={<LabaRugiSettingPage />} />

        <Route path="neraca" element={<NeracaPage />} />
        <Route path="neraca/setting" element={<NeracaSettingPage />} />
        <Route path="arus-kas" element={<ArusKasPage />} />

        <Route path="pemodal" element={<PemodalPage />} />
        <Route path="pemodal/add" element={<AddPemodalPage />} />
        <Route path="pemodal/:id/edit" element={<EditPemodalPage />} />

        <Route path="akun" element={<AkunPage />} />
        <Route path="akun/add" element={<AddAkunPage />} />
        <Route path="akun/:id/edit" element={<EditAkunPage />} />

        <Route path="buku-besar" element={<BukuBesarPage />} />
        <Route path="neraca-saldo" element={<NeracaSaldoPage />} />
        <Route path="neraca-saldo/sewa-diterima-dimuka" element={<NeracaSaldoUangMukaPage />} />
        <Route path="neraca-saldo/deposit" element={<NeracaSaldoDepositoPage />} />
        <Route path="rekap-kontrak" element={<UangMukaSewaPage />} />

        {/* JURNAL  */}
        <Route path="jurnal" element={<JurnalPage />} />
        <Route path="jurnal/jurnal-umum" element={<JurnalUmumPage />} />
        <Route path="jurnal/jurnal-umum/add" element={<AddJurnalUmumPage />} />
        <Route path="jurnal/jurnal-umum/:id/edit" element={<EditJurnalUmumPage />} />

        <Route path="jurnal/jurnal-umum/uang-muka-sewa" element={<JurnalUmumUangMukaPage />} />
        <Route path="jurnal/jurnal-umum/uang-muka-sewa/add" element={<AddJurnalUmumUangMukaPage />} />
        <Route path="jurnal/jurnal-umum/uang-muka-sewa/:id/edit" element={<EditJurnalUmumUangMukaPage />} />

        <Route path="jurnal/jurnal-umum/modal" element={<JurnalUmumModalPage />} />
        <Route path="jurnal/jurnal-umum/modal/add" element={<AddJurnalUmumModalPage />} />
        <Route path="jurnal/jurnal-umum/modal/:id/edit" element={<EditJurnalUmumModalPage />} />

        <Route path="jurnal/jurnal-umum/pendapatan" element={<JurnalUmumPendapatanPage />} />
        <Route path="jurnal/jurnal-umum/pendapatan/add" element={<AddJurnalUmumPendapatanPage />} />
        <Route path="jurnal/jurnal-umum/pendapatan/:id/edit" element={<EditJurnalUmumPendapatanPage />} />

        <Route path="jurnal/jurnal-penutup" element={<JurnalPembalikPage />} />

        {/*  */}
        <Route path="jurnal/jurnal-penyesuaian" element={<JurnalPenyesuaianPage />} />
        <Route path="jurnal/jurnal-penyesuaian/add" element={<AddJurnalPenyesuaianPage />} />
      </Route>
    </>
  )
);

export default Router;
