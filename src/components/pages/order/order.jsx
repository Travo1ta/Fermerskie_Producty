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
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);

  const handleOnClickProduct = (value, index) => {
    console.log("Клик по продукту:", { value, index, swiperRef });
    console.log("Выбранные продукты:", selectProductIds);
    console.log("Всего продуктов:", products.length);
    
    if (!selectProductIds.includes(value)) {
      if (swiperRef && typeof swiperRef.slideTo === 'function') {
        console.log("Прокрутка к слайду:", index);
        // Пробуем разные методы прокрутки
        swiperRef.slideToLoop(index, 300);
        // Альтернативный метод:
        // swiperRef.slideTo(index, 300);
      } else {
        console.log("swiperRef не инициализирован");
      }
    }
  };

  const selectedProducts = products.filter(product => 
    selectProductIds.includes(product.id)
  );
  
  const totalPrice = selectedProducts.reduce((sum, product) => sum + product.price, 0);

  // Проверяем, что индекс не выходит за пределы
  const handleSwiperInit = (swiper) => {
    console.log("Swiper инициализирован:", swiper);
    console.log("Количество слайдов:", swiper.slides.length);
    setSwiperRef(swiper);
  };

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
      <ProductSwiper
        onSwiper={handleSwiperInit}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        style={{ height: '600px', overflow: 'hidden' }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} style={{ height: 'auto' }}>
            <ProductCart product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </StyledOrder>
  );
}

export default Order;