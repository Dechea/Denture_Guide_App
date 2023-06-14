'use client';

import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';
import { Button, Divider, Modal, Text, TextField, View } from 'reshaped';

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
      padding={6}
      size={{ l: '640px' }}
    >
      <View direction='column' gap={9}>
        <Text variant='title-2' color='neutral'>
          New Patient
        </Text>

        <TextField
          size='medium'
          name='patientName'
          placeholder='Patient’s name'
          onChange={handlePatientNameChange}
        />

        <Divider />
      </View>

      <View direction='row' paddingBlock={3} paddingInline={4} gap={3} justify='end'>
        <Button
          color='white'
          size='medium'
          variant='outline'
          onClick={deactivateModal}
        >
          Cancel
        </Button>
        <Button
          color='primary'
          size='medium'
          disabled={!patientName}
          onClick={onCreatePatientButtonClick}
        >
          Create
        </Button>
      </View>
    </Modal>
  );
}
