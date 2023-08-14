import { Routes, Route } from 'react-router-dom';

import { Header } from '../../components/Header';
import { ProductsTable } from '../../components/ProductsTable';
import { ProductForm } from '../../components/ProductForm';

import { useTypedDispatch } from '../../hooks/storeHooks';
import { uiGetProductList } from '../../store';

import classes from './styles.module.scss';
import { useEffect } from 'react';

export const Layout: React.FC = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(uiGetProductList());
  }, []);

  return (
    <div className={classes.layoutBody}>
      <Header />
      <div className={classes.contentLayout}>
        <Routes>
          <Route path="/list" element={<ProductsTable />}></Route>
          <Route path="/form" element={<ProductForm />}></Route>
        </Routes>
      </div>
    </div>
  );
};
