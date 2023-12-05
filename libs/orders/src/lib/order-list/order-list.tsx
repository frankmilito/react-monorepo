import styles from './order-list.module.css';
import { SharedUi } from '@obidike-org/shared-ui';

/* eslint-disable-next-line */
export interface OrderListProps {}

export function OrderList(props: OrderListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to OrderList!</h1>
      <SharedUi />
    </div>
  );
}

export default OrderList;
