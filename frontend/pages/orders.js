import PleaseSignIn from '../components/PleaseSignIn';
import OrderList from '../components/OrderList';

const Orders = props => (
  <div>
    <PleaseSignIn>
      <OrderList />
    </PleaseSignIn>
  </div>
);

export default Orders;
