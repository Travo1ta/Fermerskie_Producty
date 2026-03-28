import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import Panel from "../../ui/panel/panel";
import Title from "../../ui/title/title";
import { TitleSize } from "../../ui/title/constants";
import Button from "../../ui/button/button";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";
import ProductCart from "../../ui/product-cart/product-cart";
import {
   LeftColumn,
   StyledOrder,
   AddressInput,
   PriceLabel,
   PriceValue,
   ProductSwiper,
   CheckboxLabel
} from "./styles";

function Order({ products }) {
   const [selectProductIds, setSelectProductIds] = useState([]);

   const selectedProducts = products.filter(product =>
      selectProductIds.includes(product.id)
   );

   const totalPrice = selectedProducts.reduce((sum, product) => sum + product.price, 0);

   return (
      <StyledOrder as="form">
         <LeftColumn>
            <Panel $marginBottom={20} $paddingTop={24} $paddingBottom={10}>
               <Title as="h2" size={TitleSize.EXTRA_SMALL} $marginBottom={12}>
                  Выберите продукты
               </Title>
               <CheckboxList
                  labelComponent={CheckboxLabel}
                  name="select-products"
                  isGridList={false}
                  options={products.map((product) => ({
                     value: product.id,
                     title: product.name
                  }))}
                  selectValues={selectProductIds}
                  onChange={setSelectProductIds}
               />
            </Panel>
            <Panel>
               <Title size={TitleSize.EXTRA_SMALL} $marginBottom={24}>
                  Сделать заказ
               </Title>
               <AddressInput placeholder="Введите адрес доставки" />
               <PriceLabel as="span">Цена</PriceLabel>
               <PriceValue>{totalPrice} руб.</PriceValue>
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