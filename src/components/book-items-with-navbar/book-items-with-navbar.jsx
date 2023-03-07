import { useState } from 'react';
import { BookNavBar } from '../book-navigation-bar/book-navigation-bar';
import { BookItems } from '../book-items/book-items';

export const BookItemsWithNavBar = () => {
  const [viewMode, setViewMode] = useState(true);

  return (
    <>
      <BookNavBar viewMode={viewMode} setViewMode={setViewMode}/>
      <BookItems viewMode={viewMode} setViewMode={setViewMode}/>
    </>
  );
};
