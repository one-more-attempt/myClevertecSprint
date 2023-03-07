import { Outlet } from 'react-router-dom';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Content } from '../../components/content/content';
// import { ReactComponent as SlashIcon } from '../../img/slash.svg';
import bookImg from '../../img/book-img.jpg';
import { BookNavBar } from '../../components/book-navigation-bar/book-navigation-bar';
import { CategoriesMenu } from '../../components/categories-menu/categories-menu';
import { BookItems } from '../../components/book-items/book-items';

export const MainPage = () => (
  <div className='main-page-wrapper'>
    <Header />
    <Content />
    <Footer />
  </div>
);
