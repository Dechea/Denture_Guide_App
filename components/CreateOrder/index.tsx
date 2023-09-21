'use client';

import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';
import { Button, Icon, Modal, Text, TextField, View } from 'reshaped';
import CrossIcon from '../Icons/Cross';
import { useQuery } from 'fauna-typed';
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
