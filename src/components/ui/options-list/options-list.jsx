import React from "react";
import { Option, Property, List } from "./styles";

function OptionsList({ list = [], delimeter = ": " }) {
   return (
      <List>
         {list.map((option) => (
            <Option key={option.property}>
               <Property>
                  {option.property}
                  {delimeter}
               </Property>
               {option.value}
            </Option>
         ))}
      </List>
   );
}

export default OptionsList;