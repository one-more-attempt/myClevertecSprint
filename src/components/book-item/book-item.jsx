import { useNavigate } from 'react-router-dom';
import { ReactComponent as StarIconFilled } from '../../img/star.svg';
import { ReactComponent as StarIconUnfilled } from '../../img/star-unfilled.svg';
import { ReactComponent as EmptyImg } from '../../img/empty-image.svg';

export const BookItem = ({
  bookName,
  bookAuthor,
  orderedUntil,
  haveRating,
  bookYear,
  bookRating,
  bookImg,
  bookStatus,
  viewMode,
  bookID,
}) => {
  const rateCount = [];
  let imageContainer;
  let currentStatus;
  const navigate = useNavigate();

  const calculateRating = () => {
    for (let i = bookRating; i > 0; i--) {
      rateCount.push(<StarIconFilled key={rateCount} />);
    }
    if (bookRating < 5) {
      for (let i = 5 - bookRating; i > 0; i--) {
        rateCount.push(<StarIconUnfilled key={rateCount} />);
      }
    }
  };

  calculateRating();

  const checkStatus = () => {
    if (bookStatus) {
      currentStatus = (
        <div className='status-bar available'>
          <span>Забронировать</span>
        </div>
      );
    } else {
      currentStatus = (
        <div className='status-bar ordered'>
          <span>Забронирована</span>
        </div>
      );
      if (orderedUntil) {
        currentStatus = (
          <div className='status-bar ordered-until'>
            <span>Занята до {orderedUntil}</span>
          </div>
        );
      }
    }
  };

  checkStatus();

  const clickToBook = (id) => {
    navigate(`/books/${id}`);
  };

  // const checkImage = () => {
  //   if (bookImg) {
  //     imageContainer = (
  //       // <div className='book-img'>
  //         <img src={bookImg} alt='' />
  //       // </div>
  //     );
  //   } else {
  //     imageContainer = (
  //       // <div className='book-img no-image'>
  //         <EmptyImg />
  //       // </div>
  //     );
  //   }
  // };

  // checkImage();

  if (viewMode) {
    return (
      <div className='book-item' data-test-id='card' onClick={() => clickToBook(bookID)} aria-hidden='true'>
        {bookImg ? (
          <div className='book-img'>
            <img src={bookImg} alt='' />
          </div>
        ) : (
          <div className='book-img no-image'>
            <EmptyImg />
          </div>
        )}
        <div className='rating'>{haveRating ? rateCount : 'еще нет оценок'}</div>
        <div className='book-name'>
          <span> {bookName}</span>
        </div>
        <div className='book-author-year'>
          <span className='book-author'>{bookAuthor}</span>, <span className='book-year'>{bookYear}</span>
        </div>
        {currentStatus}
      </div>
    );
  }

  return (
    <div className='book-item-list' data-test-id='card' onClick={() => clickToBook(bookID)} aria-hidden='true'>
      {bookImg ? (
        <div className='book-img'>
          <img src={bookImg} alt='' />
        </div>
      ) : (
        <div className='book-img no-image'>
          <EmptyImg />
        </div>
      )}
      <div className='book-info'>
        <div className='book-name'>
          <span> {bookName}</span>
        </div>
        <div className='book-author-year'>
          <span className='book-author'>{bookAuthor}</span>, <span className='book-year'>{bookYear}</span>
        </div>
        <div className='rating-status-list'>
          <div className='rating'>{haveRating ? rateCount : 'еще нет оценок'}</div>
          {currentStatus}
        </div>
      </div>
    </div>
  );
};
