import React from "react";
import styled from "styled-components";

export const VisuallyHiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0 0 0 0);
`;

export const Label = styled.label`
  cursor: pointer;
`;

function Checkbox({
   onClick,
   labelComponent,
   isChecked,
   name,
   value,
   text,
   onChange,
   ...props
}) {
   const LabelComponent = labelComponent;

   return (
      <Label>
         <VisuallyHiddenInput
            value={value}
            checked={isChecked}
            name={name}
            onChange={() => onChange(value)}
            {...props}
            type="checkbox"
         />
         <LabelComponent onClick={() => onClick(value)} $isChecked={isChecked}>
            {text}
         </LabelComponent>
      </Label>
   );
}

export default Checkbox;