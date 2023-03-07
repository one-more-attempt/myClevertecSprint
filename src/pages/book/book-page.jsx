import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as SlashIcon } from '../../img/book-page/slash.svg';
import { ReactComponent as StarIconFilled } from '../../img/star.svg';
import { ReactComponent as StarIconUnfilled } from '../../img/star-unfilled.svg';
import { ReactComponent as EmptyImg } from '../../img/empty-image.svg';
import { ReactComponent as UserAvatarTemplate } from '../../img/book-page/user-avatar-template.svg';

import { bookArray } from '../..';

export const BookPage = () => {
  const { id } = useParams();
  const bookInfo = bookArray[id - 1];
  console.log(bookInfo);

  const rateCount = [];
  let currentStatus;

  const calculateRating = (bookRating, haveRating) => {
    if (haveRating) {
      for (let i = bookRating; i > 0; i--) {
        rateCount.push(<StarIconFilled key={rateCount} />);
      }
      if (bookRating < 5) {
        for (let i = 5 - bookRating; i > 0; i--) {
          rateCount.push(<StarIconUnfilled key={rateCount} />);
        }
      }
    } else {
      for (let i = 5; i > 0; i--) {
        rateCount.push(<StarIconUnfilled key={rateCount} />);
      }
    }
  };
  calculateRating(bookInfo.bookRating, bookInfo.haveRating);

  const checkStatus = (bookStatus, orderedUntil) => {
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

  checkStatus(bookInfo.bookStatus, bookInfo.orderedUntil);

  return (
    <div className='book-page-layout'>
      <div className='breadscrumbs'>
        <span className='book-category'>
          Бизнесс книги <SlashIcon className='slash' /> Иллюстрированное пособие для программистов и любопытствующих
        </span>
      </div>
      <div className='book-page-wrapper'>
        <div className='page-details'>
          <div className='basic-info'>
            {bookInfo.bookImg ? (
              <div className='book-image'>
                <img src={bookInfo.bookImg} alt='' />
              </div>
            ) : (
              <div className='book-image no-image'>
                <EmptyImg />
              </div>
            )}

            <div className='book-name'>
              Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
            </div>
            <div className='book-author-year'>
              <span>Адитья Бхаргава</span>, <span>2019</span>
            </div>
            {currentStatus}
            <div className='book-about'>
              <div className='title-with-hr'>О книге</div>
              <div className='book-about-text'>
                Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
                решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
                изучить многостраничные фолианты c доказательствами и обоснованиями, но хотите ли вы тратить на это свое
                время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. A
                грокать алгоритмы — это веселое и увлекательное занятие.
                <br />
                <br />
                Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. A грокать
                алгоритмы — это веселое и увлекательное занятие. Откройте великолепно иллюстрированную книгу и вы сразу
                поймете, что алгоритмы — это просто. 
              </div>
            </div>
          </div>

          <div className='more-info'>
            <div className='rate-info'>
              <div className='title-with-hr'>Рейтинг</div>
              <div className='rating'>
                {rateCount}
                {bookInfo.haveRating ? <span className='rating-num'>{bookInfo.bookRating}</span> : `еще нет оценок`}
              </div>
            </div>

            <div className='detailed-info'>
              <div className='title-with-hr'>Подробная информация</div>
              <div className='details'>
                <div className='details-block'>
                  <div className='details-title'>Издательство</div>
                  <div className='details-info'>Питер</div>
                </div>
                <div className='details-block'>
                  <div className='details-title'>Год издания</div>
                  <div className='details-info'>2019</div>
                </div>
                <div className='details-block'>
                  <div className='details-title'>Страниц</div>
                  <div className='details-info'>288</div>
                </div>
                <div className='details-block'>
                  <div className='details-title'>Переплёт</div>
                  <div className='details-info'>Мягкая обложка</div>
                </div>

                <div className='details-block'>
                  <div className='details-title'>Формат</div>
                  <div className='details-info'>70х100</div>
                </div>
                <div className='details-block'>
                  <div className='details-title'>Жанр</div>
                  <div className='details-info'>Компьютерная литература</div>
                </div>
                <div className='details-block'>
                  <div className='details-title'>Вес</div>
                  <div className='details-info'>370 г</div>
                </div>
                <div className='details-block'>
                  <div className='details-title'>ISBN</div>
                  <div className='details-info'>978-5-4461-0923-4</div>
                </div>
                <div className='details-block'>
                  <div className='details-title'>Изготовитель</div>
                  <div className='details-info'>
                    ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29
                  </div>
                </div>
              </div>
            </div>

            <div className='all-comments'>
              <div className='title-with-hr'>
                Отзывы <span className='comments-num'>12</span>
              </div>
              <div className='comment'>
                <div className='user'>
                  <div className='user-avatar'>
                    <UserAvatarTemplate />
                  </div>
                  <div className='user-info'>
                    <div className='name'>Николай Качков</div>
                    <div className='date'>20 июня 2018</div>
                  </div>
                </div>
                <div className='rating'> {rateCount}</div>

                <div className='comment-text'>
                  Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не
                  оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение
                  современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении
                  поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут
                  в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий
                  уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что
                  акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя
                  само их существование приносит несомненную пользу обществу.
                </div>
              </div>
              <div className='comment'>
                <div className='user'>
                  <div className='user-avatar'>
                    <UserAvatarTemplate />
                  </div>
                  <div className='user-info'>
                    <div className='name'>Николай Качков</div>
                    <div className='date'>20 июня 2018</div>
                  </div>
                </div>
                <div className='rating'> {rateCount}</div>

                <div className='comment-text'>
                  Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не
                  оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение
                  современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении
                  поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут
                  в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий
                  уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что
                  акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя
                  само их существование приносит несомненную пользу обществу.
                </div>
              </div>
            </div>
            <div className='status-bar available'>Оценить книгу</div>
          </div>
        </div>
      </div>
    </div>
  );
};
