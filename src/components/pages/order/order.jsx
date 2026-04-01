import React, { useState } from "react";
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
import Price from "../../ui/price/price";
import {
   LeftColumn,
   StyledOrder,
   AddressInput,
   PriceLabel,
   ProductSwiper,
   CheckboxLabel,
   RightColumn,
   EmptyMessage
} from "./styles";

import { register } from 'swiper/element/bundle';
register();

function Order({ products }) {
   const [swiperRef, setSwiperRef] = useState(null);
   const [selectProductIds, setSelectProductIds] = useState([]);
   const [address, setAddress] = useState("");

   // Получаем список выбранных продуктов по их ID
   const selectProducts = selectProductIds
      .map((id) => products?.find((product) => product.id === id))
      .filter((product) => product !== undefined);

   // Вычисляем общую стоимость выбранных продуктов
   const fullPrice = selectProducts.reduce((sum, product) => sum + product.price, 0);

   const handleOnClickProduct = (value, index) => {
      if (!selectProductIds.includes(value)) {
         if (swiperRef && typeof swiperRef.slideTo === 'function') {
            swiperRef.slideTo(index, 300);
         }
      }
   };

   const handleSwiperInit = (swiper) => {
      setSwiperRef(swiper);
   };

   // Обработчик покупки
   const handleBuyClick = () => {
      const productsList = selectProducts.map(
         (product) => `${product.name} - ${product.price} руб.`
      ).join("\n");

      alert(
         `Спасибо за заказ!\n\nВы купили:\n${productsList}\n\nИтого: ${fullPrice} руб.\nДоставка по адресу: ${address}.`
      );
   };

   // Проверка, можно ли включить кнопку "Купить"
   const isBuyButtonDisabled = !(selectProductIds.length > 0 && address.trim().length > 0);

   // Если нет продуктов, показываем сообщение
   if (!products || products.length === 0) {
      return <EmptyMessage>Продукты были слишком вкусные и их разобрали.</EmptyMessage>;
   }

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
               <AddressInput
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Введите адрес доставки"
               />
               <PriceLabel as="span">Цена</PriceLabel>
               <Price value={fullPrice} />
               <Button
                  maxWidth
                  onClick={handleBuyClick}
                  disabled={isBuyButtonDisabled}
               >
                  Купить
               </Button>
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
                  releaseOnEdges: true
               }}
               freeMode={true}
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