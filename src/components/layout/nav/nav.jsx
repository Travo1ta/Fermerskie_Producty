import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../../ui/button/button";
import { StyledButton, NavList, NavItem } from "./styles";
import { AppRoute } from "../../../const";

// Список кнопок навигации
const links = [
   {
      to: AppRoute.MAIN,
      item: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>
   },
   {
      to: AppRoute.ORDER,
      item: <Button link={AppRoute.ORDER}>Купить</Button>
   }
];

function Nav() {
   // Получаем текущий URL страницы
   const pageUrl = useLocation().pathname;

   return (
      <nav>
         <NavList>
            {links
               // Убираем кнопку, которая ведет на текущую страницу
               .filter((link) => link.to !== pageUrl)
               .map((link) => (
                  <NavItem key={link.to}>{link.item}</NavItem>
               ))}
         </NavList>
      </nav>
   );
}

export default Nav;