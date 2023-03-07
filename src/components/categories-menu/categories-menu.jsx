import { Link } from 'react-router-dom';

export const CategoriesMenu = () => (
  <div className='categories-menu-wrapper'>
    <div className='categories-title'>Витрина книг</div>
    <hr />
    <div className='categories-list'>
      <Link to='/books/all'>
        <div className='all-books-title'>Все книги</div>
      </Link>

      <div className='categories-item'>
        <span className='categories-item-name'>Бизнес-книги</span>
        <span className='categories-item-count'>14</span>
      </div>
      <div className='categories-item'>
        <span className='categories-item-name'>Бизнес-книги</span>
        <span className='categories-item-count'>14</span>
      </div>
      <div className='categories-item'>
        <span className='categories-item-name'>Детективы</span>
        <span className='categories-item-count'>8</span>
      </div>
      <div className='categories-item'>
        <span className='categories-item-name'>Детские книги</span>
        <span className='categories-item-count'>14</span>
      </div>
      <div className='categories-item'>
        <span className='categories-item-name'>Зарубежная литература</span>
        <span className='categories-item-count'>2</span>
      </div>
      <div className='categories-item'>
        <span className='categories-item-name'>История</span>
        <span className='categories-item-count'>5</span>
      </div>
      <div className='categories-item'>
        <span className='categories-item-name'>Классическая литература</span>
        <span className='categories-item-count'>54</span>
      </div>
      <div className='categories-item'>
        <span className='categories-item-name'>Книги по психологии</span>
        <span className='categories-item-count'>11</span>
      </div>
      <div className='categories-item'>
        <span className='categories-item-name'>
          Компьютерная литература <span className='categories-item-count'>54</span>
        </span>
      </div>
      <div className='categories-item'>
        <span className='categories-item-name'>Наука и образованиео</span>
        <span className='categories-item-count'>2</span>
      </div>
      <div className='categories-item'>
        <span className='categories-item-name'>
          Публицистическая литература<span className='categories-item-count'>0</span>
        </span>
      </div>
      <div className='categories-item'>
        <span className='categories-item-name'>
          Справочники<span className='categories-item-count'>0</span>
        </span>
      </div>
      <div className='categories-item'>
        <span className='categories-item-name'>
          Фантастика <span className='categories-item-count'>10</span>
        </span>
      </div>
      <div className='categories-item'>
        <span className='categories-item-name'>
          Юмористическая литература<span className='categories-item-count'>8</span>
        </span>
      </div>
    </div>
    <Link to='/terms'>
      <div className='other-items'>Правила пользования</div>
    </Link>
    <Link to='/contract'>
      <div className='other-items'>Договор офферты</div>
    </Link>
  </div>
);
