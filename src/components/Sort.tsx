import { memo, useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../redux/store';
import { setSort } from '../redux/filter/slice';
import { SortPropertyEnum, Sort as SortType } from '../redux/filter/types';

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type SortPopupProps = {
  value: SortType;
};

export const sortList: SortItem[] = [
  { name: 'Самым популярным', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'Самым непопулярным', sortProperty: SortPropertyEnum.RATING_ASC },
  { name: 'Самым дорогим', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'Самым дешевым', sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: 'алфавиту возрастание', sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: 'алфавиту убывание', sortProperty: SortPropertyEnum.TITLE_ASC },
];

const Sort: React.FC<SortPopupProps> = memo(({ value }) => {
  const [open, setOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={value.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Sort;
