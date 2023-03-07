import { useNavigate, Link } from 'react-router-dom';

import { BookItem } from '../book-item/book-item';

import { bookArray } from '../..';

export const BookItems = ({ viewMode, setViewMode }) => {
  const bookViewModeClass = viewMode ? 'book-items-wrapper' : 'book-items-wrapper-list';

  return (
    <div className={bookViewModeClass}>
      {bookArray.map((elem) => (
        <BookItem
          bookName={elem.bookName}
          bookRating={elem.bookRating}
          bookYear={elem.bookYear}
          bookAuthor={elem.bookAuthor}
          bookImg={elem.bookImg}
          bookStatus={elem.bookStatus}
          haveRating={elem.haveRating}
          orderedUntil={elem.orderedUntil}
          key={elem.id}
          viewMode={viewMode}
          bookID={elem.id}
        />
      ))}
    </div>
  );
};
