import React, { Dispatch, SetStateAction } from 'react';

import Flex from '@oracle/components/Flex';
import FlexContainer from '@oracle/components/FlexContainer';
import Select from '@oracle/elements/Inputs/Select';
import Spacing from '@oracle/elements/Spacing';
import Text from '@oracle/elements/Text';
import TextInput from '@oracle/elements/Inputs/TextInput';
import ToggleSwitch from '@oracle/elements/Inputs/ToggleSwitch';
import { ChevronDown, Edit } from '@oracle/icons';
import { ICON_SIZE } from '@components/shared/index.style';
import { PADDING_UNITS } from '@oracle/styles/units/spacing';

interface InputType {
  fullWidth?: boolean;
  monospace?: boolean;
  onChange?: (event: any) => void;
  placeholder?: string;
  type?: string;
  value?: string | number;
}

type SetupSectionRowProps = {
  children?: any;
  description?: any | string;
  invalid?: boolean;
  large?: boolean;
  selectInput?: InputType & {
    options: {
      label?: string;
      value: any;
    }[];
  };
  textInput?: InputType;
  title?: string | any;
  toggleSwitch?: {
    checked?: boolean;
    onCheck?: Dispatch<SetStateAction<boolean>>;
  };
  warning?: boolean;
};

function SetupSectionRow({
  children,
  description,
  invalid,
  large = true,
  selectInput,
  textInput,
  title,
  toggleSwitch,
  warning,
}: SetupSectionRowProps) {
  return (
    <Spacing p={PADDING_UNITS}>
      <FlexContainer alignItems="center">
        <FlexContainer flexDirection="column">
          <Text
            danger={invalid}
            default
            large={large}
            warning={warning}
          >
            {title} {invalid && (
              <Text danger inline large={large}>
                is required
              </Text>
            )}
          </Text>

          {description && typeof description === 'string' && (
            <Text muted small>
              {description}
            </Text>
          )}
          {description && typeof description !== 'string' && description}
        </FlexContainer>

        <Spacing mr={PADDING_UNITS} />

        <Flex flex={1} justifyContent="flex-end">
          {children}

          {textInput && (
            <TextInput
              afterIcon={<Edit />}
              afterIconClick={(_, inputRef) => {
                inputRef?.current?.focus();
              }}
              afterIconSize={ICON_SIZE}
              alignRight
              autoComplete="off"
              large={large}
              noBackground
              noBorder
              fullWidth
              paddingHorizontal={0}
              paddingVertical={0}
              setContentOnMount
              {...textInput}
            />
          )}

          {selectInput && (
            <Select
              {...selectInput}
              afterIcon={<ChevronDown />}
              afterIconSize={ICON_SIZE}
              alignRight
              autoComplete="off"
              large={large}
              noBackground
              noBorder
              paddingHorizontal={0}
              paddingVertical={0}
              setContentOnMount
            >
              {selectInput?.options?.map(({
                label,
                value,
              }) => (
                <option key={value} value={value}>
                  {label || value}
                </option>
              ))}
            </Select>
          )}

          {toggleSwitch && (
            <ToggleSwitch
              checked={!!toggleSwitch?.checked}
              compact
              onCheck={toggleSwitch?.onCheck}
            />
          )}
        </Flex>
      </FlexContainer>
    </Spacing>
  );
}

export default SetupSectionRow;
