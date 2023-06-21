'use client';

import { Button, Icon } from 'reshaped';

import UploadIcon from '../Icons/Upload';

const ShareButton = () => {
  return <Button icon={<Icon svg={UploadIcon} size={4} />}>Share</Button>;
};

export default ShareButton;
