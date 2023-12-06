// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { useRoutes } from 'react-router-dom';
import { ProductList, Products } from '@obidike-org/products';
import { OrderList } from '@obidike-org/orders';

function Home() {
  return <h1>Home in my mo repo</h1>;
}
export function App() {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'orders', element: <OrderList /> },
    { path: 'product', element: <ProductList /> },
    { path: 'products', element: <Products /> },
  ]);
  return routes;
}

export default App;
