import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';
import AddJurnalUmumUangMukaPage from '@src/pages/jurnal/jurnalUmumUangMuka/add';
import AddPenyesuaianAuto from '@src/pages/jurnal/jurnalUmumUangMuka/addPenyesuaianAuto';
import { addSeparator } from '@src/utils/fieldFormatter';
import moment from 'moment';
import { useEffect, useState } from 'react';

const FormPenyesuaian = ({ bulan, data, bulanMoment }: { bulan: any; data: any, bulanMoment: any }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  console.log("datasss", data);
  return (
    <>
      {data[bulan] !== null ? (
        <>
          {
            data[bulan] !== 'belum disesuaikan' ? (
              <p>{addSeparator(data[bulan])}</p> 
            ) : (
              <p className="text-primary cursor-pointer" onClick={onOpen}>belum disesuaikan</p> 
            )
          }
        </>
      ) : '-'}

        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='5xl' scrollBehavior='inside'>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Jurnal Penyesuaian</ModalHeader>
                <ModalBody>
                 <AddPenyesuaianAuto onClose={onClose} bulanMoment={bulanMoment} bulan={bulan} contractId={data.id} tenantId={data.tenantId} tenantJenisId={data.tenantJenisId} tenantTypeId={data.tenantTypeId}/>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
     
    </>
  );
};

export default FormPenyesuaian;
