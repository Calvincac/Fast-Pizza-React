import { CartPage } from '../page-objects/CartPage';
import { HomePage } from '../page-objects/HomePage';
import { MenuPage } from '../page-objects/MenuPage';
import { OrderFormPage } from '../page-objects/OrderFormPage';
import { OrderPage } from '../page-objects/OrderPage';

export type Fixtures = {
  homePage: HomePage;
  cartPage: CartPage;
  menuPage: MenuPage;
  orderPage: OrderPage;
  orderFormPage: OrderFormPage;
};
