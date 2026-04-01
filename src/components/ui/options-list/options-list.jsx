import React from "react";
import { Option, Property, List } from "./styles";

function OptionsList({ list = [], delimeter = ": " }) {
   console.log("OptionsList рендерится, список:", list);

   if (!list || list.length === 0) {
      return <div>Нет данных</div>;
   }

   return (
      <List>
         {list.map((option, index) => (
            <Option key={`option-${option.property}-${index}`}>
               <Property>
                  {option.property}
                  {delimeter}
               </Property>
               <span>{option.value}</span>
            </Option>
         ))}
      </List>
   );
}

export default OptionsList;