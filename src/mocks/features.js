import eat1 from '../assets/eat-1.svg';
import garbage1 from '../assets/garbage-1.svg';
import sprout1 from '../assets/sprout-1.svg';
import noMeat1 from '../assets/no-meat-1.svg';

const features = [
   {
      id: 0,
      title: 'Еда намного вкуснее',
      owner: 'Фермерские продукты',
      isNegative: false,
      image: eat1,
      about: 'Домашняя колбаса из&nbsp;мяса, соли и&nbsp;специй и&nbsp;колбаса из&nbsp;магазина&nbsp;&mdash; два настолько разных продукта, что они даже не&nbsp;родственники',
   },
   {
      id: 1,
      title: 'Просроченные продукты',
      owner: 'Магазинные продукты',
      isNegative: true,
      image: garbage1,
      about: 'Из-за большого количества товаров сотрудники магазинов не&nbsp;успевают своевременно производить замену товара',
   },
   {
      id: 3,
      title: 'Натуральные продукты',
      owner: 'Фермерские продукты',
      isNegative: false,
      image: sprout1,
      about: 'Поставляем местные органические продукты, выращенные без пестицидов и&nbsp;химических удобрений.',
   },
   {
      id: 4,
      title: 'Некачественное мясо',
      owner: 'Магазинные продукты',
      isNegative: true,
      image: noMeat1,
      about: 'Мясные полуфабрикаты, в&nbsp;которых содержится чрезмерно много натрия, вредных жиров, консервантов',
   },
];

export default features;