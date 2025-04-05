import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartItemByid } from '../../redux/cart/selectors';
import { addItem } from '../../redux/cart/slice';
import { CartItem } from '../../redux/cart/types';

type ProductBlockProps = {
  id: string;
  title: string;
  sizes: number[];
  types: number[];
  price: number;
  rating: number;
  imageUrl: string;
};
const typeNames = ['Оригинал', 'Копия'];
const ProductBlock: React.FC<ProductBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemByid(id));
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);

  const addedCount = cartItem ? cartItem.count : 0;
  const onClickAdd = () => {
    const itemsCart: CartItem = {
      id: id,
      title: title,
      price: price,
      imageUrl: imageUrl,
      size: sizes[activeSize],
      type: typeNames[activeType],
      count: 0,
    };

    dispatch(addItem(itemsCart));
  };
  const percent = (price / 100) * 50;
  return (
    <div className="product-block-wrapper">
      <div className="product-block">
        <Link key={id} to={`/product/${id}`}>
          <img className="product-block__image" src={imageUrl} alt="product" />
          <h4 className="product-block__title">{title}</h4>
        </Link>
        <div className="product-block__selector">
          <ul>
            {types.map((typeId) => (
              <li
                key={typeId}
                onClick={() => setActiveType(typeId)}
                className={activeType === typeId ? 'active' : ''}>
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size: number, i: number) => (
              <li
                key={size}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? 'active' : ''}>
                {size}{' '}
              </li>
            ))}
          </ul>
        </div>
        <div className="product-block__bottom">
          <div className="product-block__price">
            от {types[types.length - 1] === activeType ? percent.toFixed() : price} ₽
          </div>
          <div onClick={onClickAdd} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;

// [
//   {
//     "id": "0",
//     "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EF853919DA755880D61337079E32EC.avif",
//     "title": "Пепперони Фреш с перцем",
//     "types": [
//       0,
//       1
//     ],
//     "sizes": [
//       26,
//       30,
//       40
//     ],
//     "price": 803,
//     "category": 1,
//     "rating": 4
//   },
//   {
//     "id": "1",
//     "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
//     "title": "Сырная",
//     "types": [
//       0
//     ],
//     "sizes": [
//       26,
//       40
//     ],
//     "price": 245,
//     "category": 3,
//     "rating": 6
//   },
//   {
//     "id": "2",
//     "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EF62EFAF3F9D8EA952FF25941A5621.avif",
//     "title": "Цыпленок барбекю",
//     "types": [
//       0
//     ],
//     "sizes": [
//       26,
//       40
//     ],
//     "price": 295,
//     "category": 1,
//     "rating": 4
//   },
//   {
//     "id": "3",
//     "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
//     "title": "Кисло-сладкий цыпленок",
//     "types": [
//       1
//     ],
//     "sizes": [
//       26,
//       30,
//       40
//     ],
//     "price": 275,
//     "category": 2,
//     "rating": 2
//   },
//   {
//     "id": "4",
//     "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EF62EDADCB2F6383A9D886DB073745.avif",
//     "title": "Чизбургер-пицца",
//     "types": [
//       0,
//       1
//     ],
//     "sizes": [
//       26,
//       30,
//       40
//     ],
//     "price": 415,
//     "category": 3,
//     "rating": 8
//   },
//   {
//     "id": "5",
//     "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EF61F78BBE5063A44AC0B2FE810D9A.avif",
//     "title": "Крэйзи пепперони",
//     "types": [
//       0
//     ],
//     "sizes": [
//       30,
//       40
//     ],
//     "price": 580,
//     "category": 2,
//     "rating": 2
//   },
//   {
//     "id": "6",
//     "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EF853919DA755880D61337079E32EC.avif",
//     "title": "Пепперони",
//     "types": [
//       0,
//       1
//     ],
//     "sizes": [
//       26,
//       30,
//       40
//     ],
//     "price": 675,
//     "category": 1,
//     "rating": 9
//   },
//   {
//     "id": "7",
//     "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
//     "title": "Маргарита",
//     "types": [
//       0,
//       1
//     ],
//     "sizes": [
//       26,
//       30,
//       40
//     ],
//     "price": 450,
//     "category": 4,
//     "rating": 10
//   },
//   {
//     "id": "8",
//     "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE7D617E9339CFB185921A343AD8FD.avif",
//     "title": "Четыре сезона",
//     "types": [
//       0,
//       1
//     ],
//     "sizes": [
//       26,
//       30,
//       40
//     ],
//     "price": 395,
//     "category": 5,
//     "rating": 10
//   },
//   {
//     "id": "9",
//     "imageUrl": "https://media.dodostatic.net/image/r:292x292/11EE7D61546D8483A61A0BBAA7ADCC78.avif",
//     "title": "Овощи и грибы 🌱",
//     "types": [
//       0,
//       1
//     ],
//     "sizes": [
//       26,
//       30,
//       40
//     ],
//     "price": 285,
//     "category": 1,
//     "rating": 7
//   }
// ]
