import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './index.scss';
import { BookPage } from './pages/book/book-page';
import { BookItems } from './components/book-items/book-items';
import { BasicLayout } from './components/basic-layout/basic-layout';
import { MainPageLayout } from './components/main-page-layout/main-page-layout';
import { BookNavBar } from './components/book-navigation-bar/book-navigation-bar';
import { Terms } from './pages/terms/terms';
import { BookItemsWithNavBar } from './components/book-items-with-navbar/book-items-with-navbar';

import bookImage from './img/book-img.jpg';

export const bookArray = [
  {
    bookName: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов',
    bookAuthor: 'Адитья Бхаргава',
    bookYear: 2019,
    haveRating: false,
    bookRating: 5,
    bookImg: '',
    bookStatus: true,
    id: 1,
  },
  {
    bookName: 'Грокаем . Иллюстрированное пособие для программистов',
    bookAuthor: 'Адитья Бхаргава',
    bookYear: 2019,
    bookRating: 4,
    haveRating: true,
    bookImg: bookImage,
    bookStatus: false,
    orderedUntil: '23.04',
    id: 2,
  },
  {
    bookName: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов',
    bookAuthor: 'Адитья Бхаргава',
    bookYear: 2019,
    bookRating: 3,
    haveRating: true,
    bookImg: bookImage,
    bookStatus: true,
    id: 3,
  },
  {
    bookName:
      'Грокаем алгоритмы. Иллюстрированное пособие для программистов.  Иллюстрированное пособие для программистов',
    bookAuthor: 'Адитья Бхаргава, Адитья Бхаргава, Адитья Бхаргава, Адитья Бхаргава,Адитья Бхаргава',
    bookYear: 2019,
    haveRating: true,
    bookRating: 2,
    bookImg: bookImage,
    bookStatus: false,
    id: 4,
  },
  {
    bookName: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов',
    bookAuthor: 'Адитья Бхаргава',
    bookYear: 2019,
    bookRating: 1,
    haveRating: true,
    bookImg: bookImage,
    bookStatus: true,
    id: 5,
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route element={<MainPageLayout />}>
            <Route path='/' element={<Navigate to='books/all' />} />
            <Route path='/books/all' element={<BookItemsWithNavBar />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/contract' element={<Terms />} />
          </Route>
          <Route path='/books/:id' element={<BookPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
