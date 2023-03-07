import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { BookItems } from '../book-items/book-items';
import { BookNavBar } from '../book-navigation-bar/book-navigation-bar';
import { CategoriesMenu } from '../categories-menu/categories-menu';

export const Content = () => {
  const [viewMode, setViewMode] = useState(true);

  return (
    <div className='content-wrapper'>
      <CategoriesMenu />
      <div className='books-view-wrapper'>
        <BookNavBar viewMode={viewMode} setViewMode={setViewMode} />
        <BookItems viewMode={viewMode} setViewMode={setViewMode} />
      </div>
    </div>
  );
};
