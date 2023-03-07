import { Outlet } from 'react-router-dom';
import { CategoriesMenu } from '../categories-menu/categories-menu';
import { Content } from '../content/content';

/* <BookNavBar viewMode={viewMode} setViewMode={setViewMode} /> */
/* <BookItems viewMode={viewMode} setViewMode={setViewMode} /> */

export const MainPageLayout = () => (
  <div className='main-page-wrapper'>
    <div className='content-wrapper'>
      <CategoriesMenu />
      <div className='books-view-wrapper'>
        <Outlet />
      </div>
    </div>
  </div>
);
