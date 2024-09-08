import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p data-auto-id="total-price" className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity
          data-auto-id="update-cart-item"
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem data-auto-id="delete-cart-item" pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
