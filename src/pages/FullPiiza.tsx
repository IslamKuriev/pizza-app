import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { selectPizzaData } from '../redux/pizza/selectors';
import { fetchPizzaById } from '../redux/pizza/asyncActions';

const FullPiiza: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { itemsById, status } = useSelector(selectPizzaData);
  const { id } = useParams<{ id: string | undefined }>();

  useEffect(() => {
    if (id) {
      dispatch(fetchPizzaById({ id }));
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
    return <div className="container">Пицца не найдена</div>;
  }

  return (
    <div className="container">
      <img src={itemsById.imageUrl} alt="Pizza" />
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

export default FullPiiza;
