import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { selectProductData } from '../redux/product/selectors';
import { fetchProductById } from '../redux/product/asyncActions';

const FullProduct: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { itemsById, status } = useSelector(selectProductData);
  const { id } = useParams<{ id: string | undefined }>();

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById({ id }));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (status === 'error') {
      alert('Ошибка при получении данных пиццы');
      navigate('/');
    }
  }, [status, navigate]);

  if (status === 'loading') {
    return <div className="container">Загрузка...</div>;
  }

  if (!itemsById) {
    return <div className="container">Товар не найдена</div>;
  }

  return (
    <div className="container">
      <img style={{ width: '260px' }} src={itemsById.imageUrl} alt="Product" />
      <h2>{itemsById.title}</h2>
      <h4>{itemsById.price} ₽</h4>
      <div className="button pay-btn">
        <Link to={'/'}>
          <span>Назад</span>
        </Link>
      </div>
    </div>
  );
};

export default FullProduct;
