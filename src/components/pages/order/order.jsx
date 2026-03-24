import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import Panel from "../../ui/panel/panel";
import Title from "../../ui/title/title";
import { TitleSize } from "../../ui/title/constants";
import Button from "../../ui/button/button";
import ProductCart from "../../ui/product-cart/product-cart";
import {
   LeftColumn,
   StyledOrder,
   AddressInput,
   PriceLabel,
   PriceValue
} from "./styles";

const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-slide {
    height: auto;
  }
`;

function Order({ products }) {
   return (
      <StyledOrder as="form">
         <LeftColumn>
            <Panel $marginBottom={20} $paddingTop={24} $paddingBottom={10}>
               <Title as="h2" size={TitleSize.EXTRA_SMALL} $marginBottom={12}>
                  Выберите продукты
               </Title>
               {/* Чекбокс со списком продуктов */}
            </Panel>
            <Panel>
               <Title size={TitleSize.EXTRA_SMALL} $marginBottom={24}>
                  Сделать заказ
               </Title>
               <AddressInput placeholder="Введите адрес доставки" />
               <PriceLabel as="span">Цена</PriceLabel>
               <PriceValue>400</PriceValue>
               <Button maxWidth>Купить</Button>
            </Panel>
         </LeftColumn>
         <ProductSwiper
            spaceBetween={12}
            direction="vertical"
            slidesPerView="auto"
            scrollbar={{ draggable: true }}
            mousewheel
         >
            {products.map((product) => (
               <SwiperSlide key={product.id}>
                  <ProductCart product={product} />
               </SwiperSlide>
            ))}
         </ProductSwiper>
      </StyledOrder>
   );
}

export default Order;