import React from "react";
import styled from "styled-components";
import Checkbox from "../checkbox/checkbox";

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: ${(props) => (props.$isGridList ? "grid" : "block")};
  gap: 12px;
`;

export const Li = styled.li`
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

function CheckboxList({
   selectValues,
   labelComponent,
   options,
   name,
   onChange,
   isGridList,
   onClickLabel = () => { }
}) {
   const handleChange = (value) => {
      console.log("=== CheckboxList handleChange ===");
      console.log("Изменение значения:", value);
      const newValue = [...selectValues];
      const indexValue = newValue.indexOf(value);
      if (indexValue >= 0) {
         newValue.splice(indexValue, 1);
      } else {
         newValue.push(value);
      }
      onChange?.(newValue);
   };

   const handleClickLabel = (value, index) => {
      console.log("=== CheckboxList handleClickLabel ===");
      console.log("Клик на метку, значение:", value);
      console.log("Клик на метку, индекс:", index);
      console.log("Вызываем onClickLabel");
      onClickLabel(value, index);
   };

   return (
      <Ul $isGridList={isGridList}>
         {options.map((option, idx) => {
            const itemIndex = option.index ?? idx;
            return (
               <Li key={option.value}>
                  <Checkbox
                     labelComponent={labelComponent}
                     isChecked={selectValues.includes(option.value)}
                     name={name}
                     value={option.value}
                     text={option.title}
                     onClick={() => handleClickLabel(option.value, itemIndex)}
                     onChange={handleChange}
                  />
               </Li>
            );
         })}
      </Ul>
   );
}

export default CheckboxList;