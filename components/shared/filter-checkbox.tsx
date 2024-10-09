import React from "react";

import { Checkbox } from "../ui";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckChange?: (checked: boolean) => void;
  checked?: boolean;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  endAdornment,
  onCheckChange,
  checked,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        className="rounded-[8px] w-6 h-6"
        onCheckedChange={onCheckChange}
        value={value}
        checked={checked}
        id={`checkbox-${String(value)}`}
      />
      <label
        className="flex-1 leading-none cursor-pointer"
        htmlFor={`checkbox-${String(value)}`}
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
