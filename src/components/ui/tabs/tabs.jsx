import React, { useState, useRef, useEffect } from "react";
import { TabButton, Header, Content, TabListItem } from "./styles";

function Tabs({ tabsList = [], maxContentHeiht = "150px" }) {
   const [selectIndex, setSelectIndex] = useState(0);
   const contentRef = useRef(null);

   // Обработчик прокрутки колесиком внутри контента
   useEffect(() => {
      const contentElement = contentRef.current;

      const handleWheel = (e) => {
         if (contentElement) {
            // Проверяем, можно ли прокрутить вверх или вниз
            const canScrollUp = contentElement.scrollTop > 0;
            const canScrollDown = contentElement.scrollHeight > contentElement.clientHeight + contentElement.scrollTop;

            // Если можно прокрутить в направлении колесика
            if ((e.deltaY < 0 && canScrollUp) || (e.deltaY > 0 && canScrollDown)) {
               e.stopPropagation();
               contentElement.scrollTop += e.deltaY;
            }
         }
      };

      if (contentElement) {
         contentElement.addEventListener('wheel', handleWheel, { passive: false });
      }

      return () => {
         if (contentElement) {
            contentElement.removeEventListener('wheel', handleWheel);
         }
      };
   }, []);

   // Обновляем скролл при смене вкладки
   useEffect(() => {
      if (contentRef.current) {
         contentRef.current.scrollTop = 0;
      }
   }, [selectIndex]);

   return (
      <div>
         <Header>
            {tabsList.map((tab, index) => (
               <TabListItem key={`tab-${tab.title}-${index}`}>
                  <TabButton
                     $isSelect={selectIndex === index}
                     onClick={selectIndex === index ? undefined : () => setSelectIndex(index)}
                     as={selectIndex === index ? "span" : "button"}
                  >
                     {tab.title}
                  </TabButton>
               </TabListItem>
            ))}
         </Header>
         <Content ref={contentRef} $maxContentHeiht={maxContentHeiht}>
            {tabsList[selectIndex]?.content}
         </Content>
      </div>
   );
}

export default Tabs;