import { useState } from 'react';

import { ReactComponent as TileIcon } from '../../img/tile-icon.svg';
import { ReactComponent as ListIcon } from '../../img/list-icon.svg';
import { ReactComponent as SearchIcon } from '../../img/search-icon.svg';
import { ReactComponent as SortIcon } from '../../img/sort-icon.svg';

export const BookNavBar = ({ viewMode, setViewMode }) => (
  <div className='book-navbar-wrapper'>
    <div className='find-sort-options'>
      <div className='find'>
        <SearchIcon className='search-icon' />
        <input className='find-input' type='text' placeholder='Поиск книги или автора...' />
      </div>
      <div className='sort'>
        <SortIcon className='sort-icon' />
        <span className='sort-text'>По рейтингу</span>
      </div>
    </div>
    <div className='view-options'>
      <button
        type='button'
        className={`tile-view ${viewMode ? 'active-view' : null}`}
        data-test-id='button-menu-view-window'
        onClick={() => {
          setViewMode(true);
        }}
      >
        <TileIcon className='tile-icon' />
      </button>
      <button
        type='button'
        data-test-id='button-menu-view-list'
        className={`list-view ${viewMode ? null : 'active-view'}`}
        onClick={() => {
          setViewMode(false);
        }}
      >
        <ListIcon className='list-icon' />
      </button>
    </div>
  </div>
);
