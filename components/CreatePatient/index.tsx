'use client';

import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';
import { Button, Icon, Modal, Text, TextField, View } from 'reshaped';
import CrossIcon from '../Icons/Cross';

interface CreatePatientProps {
  activeModal: boolean;
  deactivateModal: (() => void) | undefined;
}

interface onChangeEventHandler {
  name: string;
  value: string;
  event?: SyntheticEvent;
}

export default function CreatePatient({
  activeModal,
  deactivateModal,
}: CreatePatientProps) {
  const [patientName, setPatientName] = useState('');
  const router = useRouter();

  const handlePatientNameChange = ({ value }: onChangeEventHandler): void => {
    setPatientName(value);
  };

  const onCreatePatientButtonClick = () => {
    // TODO: use dynamic PatientFile Id
    router.push('/366051179773296849/treatments');
  };

  return (
    <Modal
      active={activeModal}
      onClose={deactivateModal}
      padding={4}
      size='509px'
    >

      <View gap={11} className="cursor-default">
        <View gap={2} direction='row' align='center' >
          <View.Item grow>

            <Text variant='featured-2' weight='bold' color='neutral' >
              Create Order for...
            </Text>
          </View.Item>


          <Button onClick={deactivateModal} icon={<Icon size={5} svg={CrossIcon} />} variant='ghost' size='large' />
        </View>

        <View gap={1}>
          <Text variant='body-3' weight='medium' color='neutral'>Patient’s Name</Text>
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
                disabled={!patientName}
                onClick={onCreatePatientButtonClick}
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
