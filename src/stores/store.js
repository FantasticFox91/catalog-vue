import { defineStore } from 'pinia';
import image1 from '@/assets/img/coffee-can-1.png';
import image2 from '@/assets/img/coffee-can-2.png';
import image3 from '@/assets/img/coffee-can-3.png';
import image4 from '@/assets/img/coffee-can-4.png';
import image5 from '@/assets/img/coffee-can-5.png';
import image6 from '@/assets/img/coffee-can-6.png';

export const useMainStore = defineStore('store', () => {
  const itemsCount = Math.floor(Math.random() * 10) + 1;
  const productData = [
    {
      id: 1,
      name: "Декаф Флэт Уайт",
      cover: image1,
      price: 300,
      description: "Свежесваренный кофе без кофеина из Эфиопии  с натуральным фермерским молоком — то, что нужно для расслабления после тяжёлого рабочего дня"
    },
    {
      id: 2,
      name: "Эспрессо",
      cover: image2,
      price: 250,
      description: "Мощнее укола адреналина, чернее самой тёмной ночи, этот эспрессо из Колумбии покажет вам, что такое настоящая бодрость"
    },
    {
      id: 3,
      name: "Доппио",
      cover: image3,
      price: 125,
      description: "Двойной эспрессо. Порция 60 мл. Пить нужно горячим, после еды."
    },
    {
      id: 4,
      name: "Латте Макиато",
      cover: image4,
      price: 500,
      description: "Горячий кофейный напиток, приготавливаемый путём вливания в молоко кофе-эспрессо в пропорции 3:1. Итальянское macchia обозначает маленькое пятнышко кофе, остающееся на поверхности молочной пены."
    },
    {
      id: 5,
      name: "Айриш",
      cover: image5,
      price: 455,
      description: "Кофейный коктейль на основе эспрессо, виски и взбитых сливок. Подается в специальных айриш-бокалах, с трубочкой. "
    },
    {
      id: 6,
      name: "Мокко",
      cover: image6,
      price: 295,
      description: "Кофейный десерт, который готовится с помощью эспрессо, горячего молока и шоколада (иногда заменяют шоколадным сиропом). Часто сверху украшают пышной молочной пеной, усыпанной кусочками шоколада."
    },
    {
      id: 7,
      name: "Американо",
      cover: image1,
      price: 100,
      description: "Эпрессо с водой. Горячая вода добавляется в эспрессо. Стандартный объем — 60 мл. Американо можно пить до и после обеда, добавлять молоко, сливки или сахар. "
    },
    {
      id: 8,
      name: "Лунго",
      cover: image2,
      price: 270,
      description: "Похож на американо, но вода добавляется вместе с кофейной массой. Вкус более горький. Готовится только в кофемашине. Объем — 50-60 мл. "
    },
    {
      id: 9,
      name: "Коретто",
      cover: image3,
      price: 305,
      description: "Эспрессо с алкоголем. Обычно к свежесваренному эспрессо добавляют ложку виски или коньяка, иногда граппы. Можно пить с медом или сахаром"
    },
    {
      id: 10,
      name: "Глясе",
      cover: image4,
      price: 430,
      description: "В классический эспрессо кладут шарик мороженого. Сверху иногда посыпают шоколадом или корицей."
    },
  ]

  return { itemsCount, productData }
})
