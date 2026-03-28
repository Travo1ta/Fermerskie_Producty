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
  onClickLabel = () => {}
}) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue >= 0) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange?.(newValue);
  };

  return (
    <Ul $isGridList={isGridList}>
      {options.map((option) => (
        <Li key={option.value}>
          <Checkbox
            labelComponent={labelComponent}
            isChecked={selectValues.includes(option.value)}
            name={name}
            value={option.value}
            text={option.title}
            onClick={(value) => onClickLabel(value)}
            onChange={handleChange}
          />
        </Li>
      ))}
    </Ul>
  );
}

export default CheckboxList;