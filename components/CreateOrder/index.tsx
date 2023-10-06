'use client';

import { SyntheticEvent, useState } from 'react';
import { Button, Icon, Modal, Text, TextField, View } from 'reshaped';
import CrossIcon from '../Icons/Cross';
import { useLocalStorage, useQuery } from 'fauna-typed';
import { PatientFile, Query } from '../../fqlx-generated/typedefs';
import { useRouter } from 'next/navigation';

interface CreateOrderProps {
  activeModal: boolean;
  deactivateModal: () => void;
  isDiscoveryMode?: boolean;
}

interface onChangeEventHandler {
  name: string;
  value: string;
  event?: SyntheticEvent;
}

export default function CreateOrder({
  activeModal,
  deactivateModal,
  isDiscoveryMode,
}: CreateOrderProps) {
  const [patientName, setPatientName] = useState('');
  const router = useRouter();
  const query = useQuery<Query>();
  const { value: discoveryModePatientFile } = useLocalStorage(
    'discovery-mode',
    'PatientFile'
  );

  const handlePatientNameChange = ({ value }: onChangeEventHandler): void => {
    setPatientName(value);
  };

  const onCreatePatientFileButtonClick = async () => {
    try {
      let patient: PatientFile;

      if (isDiscoveryMode) {
        patient = {
          patient: { ...discoveryModePatientFile.patient, name: patientName },
          teeth: discoveryModePatientFile.teeth.slice(1),
        };
      } else {
        patient = {
          patient: { name: patientName, status: '', avatar: '' },
          teeth: [],
        };
      }

      const createdPatient = await query.PatientFile.create(patient).exec();

      if (isDiscoveryMode) {
        localStorage.removeItem('discovery-mode');
      }

      router.push(`/${createdPatient.id}/treatments`);
    } catch (err) {
      console.log('Failed to create PatientFile; Error: ', err);
    } finally {
      deactivateModal();
    }
  };

  return (
    <Modal
      active={activeModal}
      onClose={deactivateModal}
      padding={6}
      size='400px'
    >
      <View gap={12} className='cursor-default'>
        <View gap={2} direction='row' align='center'>
          <View.Item grow>
            <Text variant='featured-2' weight='bold' color='neutral'>
              Create Order for...
            </Text>
          </View.Item>

          <Button
            onClick={deactivateModal}
            icon={<Icon svg={CrossIcon} size={6} />}
            variant='ghost'
            size='large'
          />
        </View>

        <View gap={1}>
          <Text variant='body-3' weight='medium' color='neutral'>
            Patient’s Name
          </Text>
          <View direction='column' gap={3} align='center'>
            <View width='100%'>
              <TextField
                size='large'
                name='patientName'
                placeholder='John...'
                onChange={handlePatientNameChange}
                inputAttributes={{ autoComplete: 'off' }}
              />
            </View>
            <View width='100%'>
              <Button
                color='primary'
                size='large'
                onClick={onCreatePatientFileButtonClick}
                fullWidth
              >
                Create Order
              </Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
