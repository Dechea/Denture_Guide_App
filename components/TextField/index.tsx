'use client';

import { View, TextField } from 'reshaped';

type TextProps = {
  name: string;
  placeholder: string;
  inputAttributes?: string;
  maxWidth?: number;
  onClick?: any;
};
const TextFieldComponent = ({
  name,
  placeholder,
  inputAttributes,
  maxWidth,
  onClick,
}: TextProps) => {
  return (
    <View maxWidth={maxWidth}>
      <TextField
        name={name}
        placeholder={placeholder}
        onChange={(args) => onClick(args)}
        size='medium'
        inputAttributes={{ type: inputAttributes }}
      />
    </View>
  );
};

export default TextFieldComponent;
