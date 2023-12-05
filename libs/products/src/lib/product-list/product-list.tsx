import styles from './product-list.module.css';

import { SharedUi } from '@obidike-org/shared-ui';
export interface ProductListProps {}

export function ProductList(props: ProductListProps) {
  return (
    <div className={styles['container']}>
      <h1>
        {' '}
        This is the product list i just made to work also with the inventory app
      </h1>
      <SharedUi />
    </div>
  );
}

export default ProductList;
