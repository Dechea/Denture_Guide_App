'use client';

import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';
import { Button, Icon, Modal, Text, TextField, View } from 'reshaped';
import CrossIcon from '../Icons/Cross';
import { useQuery } from 'fqlx-client';
import { Query } from '../../fqlx-generated/typedefs';

interface CreateOrderProps {
  activeModal: boolean;
  deactivateModal: () => void;
}

interface onChangeEventHandler {
  name: string;
  value: string;
  event?: SyntheticEvent;
}

export default function CreateOrder({
  activeModal,
  deactivateModal,
}: CreateOrderProps) {
  const [patientName, setPatientName] = useState('');
  const router = useRouter();
  const query = useQuery<Query>();

  const handlePatientNameChange = ({ value }: onChangeEventHandler): void => {
    setPatientName(value);
  };

  const onCreatePatientFileButtonClick = async () => {
    try {
      // @ts-expect-error
      const patient = await query.PatientFile.create({
        patient: { name: patientName, status: '', avatar: '' },
        teeth: [],
      }).exec();

      router.push(`/${patient.id}/treatments`);
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
      padding={4}
      size='509px'
    >
      <View gap={11} className='cursor-default'>
        <View gap={2} direction='row' align='center'>
          <View.Item grow>
            <Text variant='featured-2' weight='bold' color='neutral'>
              Create Order for...
            </Text>
          </View.Item>
          <Button
            onClick={deactivateModal}
            icon={<Icon size={5} svg={CrossIcon} />}
            variant='ghost'
            size='large'
          />
        </View>

        <View gap={1}>
          <Text variant='body-3' weight='medium' color='neutral'>
            Patient’s Name
          </Text>
          <View direction='row' gap={3} align='center'>
            <View.Item grow>
              <TextField
                size='large'
                name='patientName'
                placeholder='Patient’s name'
                onChange={handlePatientNameChange}
                inputAttributes={{ autoComplete: 'off' }}
              />
            </View.Item>
            <View width={21}>
              <Button
                color='primary'
                size='large'
                onClick={onCreatePatientFileButtonClick}
                fullWidth
              >
                Create
              </Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
