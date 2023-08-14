import React, { useCallback, useMemo } from 'react';
import { Popconfirm, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { ProductType } from '../../types/products';
import { useTypedDispatch, useTypedSelector } from '../../hooks/storeHooks';
import { getAllProducts, uiDeleteProductByID } from '../../store';

import classes from './styles.module.scss';

const STATIC_IMG =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png';

export const ProductsTable: React.FC = () => {
  const dispatch = useTypedDispatch();
  const products = useTypedSelector(getAllProducts);

  const handleDelete = useCallback(
    (id: number) => {
      dispatch(uiDeleteProductByID(id));
    },
    [dispatch]
  );

  const columns: ColumnsType<ProductType> = useMemo(
    () => [
      {
        title: 'ID',
        width: 50,
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: 'Image',
        width: 100,
        dataIndex: 'images',
        key: 'images',
        fixed: 'left',
        render: (images: Array<string>) => (
          <img className={classes.imageClass} src={images[0] ?? STATIC_IMG} alt="product image" />
        ),
      },
      {
        title: 'Name',
        width: 100,
        dataIndex: 'title',
        key: 'title',
        fixed: 'left',
      },
      {
        title: 'Description',
        width: 150,
        dataIndex: 'description',
        key: 'description',
        fixed: 'left',
      },
      {
        title: 'Price',
        width: 50,
        dataIndex: 'price',
        key: 'price',
        fixed: 'left',
        sorter: (a, b) => a.price - b.price,
      },
      {
        title: 'Rating',
        width: 50,
        dataIndex: 'rating',
        key: 'rating',
        fixed: 'left',
        sorter: (a, b) => a.rating - b.rating,
      },
      {
        title: 'Stock',
        width: 50,
        dataIndex: 'stock',
        key: 'stock',
        fixed: 'left',
        sorter: (a, b) => a.stock - b.stock,
      },
      {
        title: 'Category',
        width: 75,
        dataIndex: 'category',
        key: 'category',
        fixed: 'left',
        filters: [
          {
            text: 'Smartphones',
            value: 'smartphones',
          },
          {
            text: 'Fragrances',
            value: 'fragrances',
          },
          {
            text: 'Groceries',
            value: 'groceries',
          },
        ],
        onFilter: (value: string | number | boolean, record) => record.category.indexOf(value as string) === 0,
      },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 50,
        render: (_, record) => (
          <Popconfirm title="Are you sure you want to delete the product?" onConfirm={() => handleDelete(record.id)}>
            <a>Delete</a>
          </Popconfirm>
        ),
      },
    ],
    [handleDelete]
  );

  return <Table columns={columns} dataSource={products} scroll={{ y: 440 }} />;
};
