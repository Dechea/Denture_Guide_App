'use client';

import { Suspense, useMemo, useRef, useState } from 'react';
import { Button, Card, DropdownMenu, TextField, View } from 'reshaped';
import useOutsideClick from '../../hooks/useOutsideClick';
import ClearIcon from '../Icons/Clear';
import Loader from '../Loader';

interface Option {
  id: string;
  label: string | number | React.ReactNode;
  value: string;
}

interface AutoCompleteProps {
  value: string | number;
  name: string;
  onChange: (text: string) => void;
  onSelectOption?: (value: Option) => void;
  options?: Option[];
  placeholder?: string;
  icon?: React.ReactElement;
  DropdownComponent?: React.ElementType;
  DropdownComponentProps?: { [key: string]: any };
}

export default function AutoComplete({
  options,
  onChange,
  onSelectOption,
  name,
  value,
  icon,
  DropdownComponent,
  DropdownComponentProps,
}: AutoCompleteProps) {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useOutsideClick(dropdownRef, () => {
    setActive(false);
  });

  const handleOptionClick = (optionValue: Option) => {
    onSelectOption?.(optionValue);
    setActive(false);
  };

  const handleClearInputClick = () => {
    onChange('');
    inputRef.current?.focus();
    setActive(true);
  };

  const dropdownComponent = useMemo(
    () =>
      DropdownComponent ? (
        <DropdownComponent
          onClick={handleOptionClick}
          {...DropdownComponentProps}
        />
      ) : null,
    [DropdownComponent]
  );

  return (
    <View attributes={{ ref: dropdownRef }}>
      <View position="relative">
        <TextField
          name={name}
          icon={icon}
          size="medium"
          value={String(value)}
          onChange={(args) => onChange(args.value)}
          onFocus={() => setActive(true)}
          inputAttributes={{ autoComplete: 'off', ref: inputRef }}
          endSlot={
            <Button
              size="small"
              variant="ghost"
              icon={ClearIcon}
              onClick={handleClearInputClick}
            />
          }
        />
      </View>
      {active && !!value && (
        <View position="absolute" insetTop={10} zIndex={10} width="100%">
          <Card
            padding={1}
            className="shadow-[0px_15px_25px_0px_rgba(0,0,0,0.07),_0px_5px_10px_0px_rgba(0,0,0,0.05)]"
          >
            <View gap={1} className="overflow-y-scroll max-h-[360px]">
              <Suspense
                fallback={
                  <View paddingBlock={4}>
                    <Loader />
                  </View>
                }
              >
                {dropdownComponent ??
                  options?.map((option) => (
                    <DropdownMenu.Item
                      key={option.id}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.label}
                    </DropdownMenu.Item>
                  ))}
              </Suspense>
            </View>
          </Card>
        </View>
      )}
    </View>
  );
}
