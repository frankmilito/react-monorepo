// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { Route, Routes, useRoutes } from 'react-router-dom';
import { ProductList } from '@obidike-org/products';
import { OrderList } from '@obidike-org/orders';

function Home() {
  return <h1>Home in my mo repo</h1>;
}
export function App() {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'orders', element: <OrderList /> },
    { path: 'product', element: <ProductList /> },
  ]);
  return routes;
}

export default App;
