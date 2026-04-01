import React, { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper/modules";
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
   CheckboxLabel,
   RightColumn
} from "./styles";

import { register } from 'swiper/element/bundle';
register();

function Order({ products }) {
   const [swiperRef, setSwiperRef] = useState(null);
   const [selectProductIds, setSelectProductIds] = useState([]);

   const handleOnClickProduct = (value, index) => {
      if (swiperRef && typeof swiperRef.slideTo === 'function') {
         swiperRef.update();
         setTimeout(() => {
            swiperRef.slideTo(index, 500);
         }, 50);
      }
   };

   const selectedProducts = products.filter(product =>
      selectProductIds.includes(product.id)
   );

   const totalPrice = selectedProducts.reduce((sum, product) => sum + product.price, 0);

   const handleSwiperInit = (swiper) => {
      setSwiperRef(swiper);
   };

   useEffect(() => {
      if (swiperRef) {
         setTimeout(() => {
            swiperRef.update();
         }, 100);
      }
   }, [selectProductIds, swiperRef]);

   return (
      <StyledOrder>
         <LeftColumn>
            <Panel $marginBottom={20} $paddingTop={24} $paddingBottom={10}>
               <Title as="h2" size={TitleSize.EXTRA_SMALL} $marginBottom={12}>
                  Выберите продукты
               </Title>
               <CheckboxList
                  labelComponent={CheckboxLabel}
                  name="select-products"
                  isGridList={false}
                  options={products.map((product, index) => ({
                     value: product.id,
                     title: product.name,
                     index: index
                  }))}
                  selectValues={selectProductIds}
                  onChange={setSelectProductIds}
                  onClickLabel={handleOnClickProduct}
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
         <RightColumn>
            <ProductSwiper
               onSwiper={handleSwiperInit}
               modules={[Mousewheel, Scrollbar]}
               spaceBetween={16}
               direction="vertical"
               slidesPerView="auto"
               scrollbar={{ draggable: true, hide: false }}
               mousewheel={{
                  enabled: true,
                  forceToAxis: true,
                  sensitivity: 0.5,
                  releaseOnEdges: true,
                  thresholdDelta: 10,
                  thresholdTime: 500
               }}
               freeMode={true}
               freeModeMomentum={true}
               freeModeMomentumRatio={0.8}
               freeModeMomentumVelocityRatio={0.8}
               freeModeSticky={false}
               observer={true}
               observeParents={true}
               speed={400}
            >
               {products.map((product) => (
                  <SwiperSlide key={product.id}>
                     <ProductCart product={product} />
                  </SwiperSlide>
               ))}
            </ProductSwiper>
         </RightColumn>
      </StyledOrder>
   );
}

export default Order;