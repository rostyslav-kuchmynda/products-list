import { useMemo } from 'react';
import { useFormik } from 'formik';

import { Button } from '@mui/material';
import { FormInput } from '../FormInput';

import { useTypedDispatch } from '../../hooks/storeHooks';
import { uiAddProduct } from '../../store';
import { productSchema } from '../../schemas';

import classes from './styles.module.scss';

export const ProductForm: React.FC = () => {
  const dispatch = useTypedDispatch();
  const { handleChange, values, handleSubmit, errors } = useFormik({
    initialValues: {
      id: 0,
      title: '',
      description: '',
      price: 1,
      rating: 0,
      stock: 0,
      category: '',
      discountPercentage: 0,
      brand: '',
      thumbnail: '',
      images: [],
    },
    validationSchema: productSchema,
    onSubmit: (values, actions) => {
      dispatch(uiAddProduct(values));
      actions.resetForm();
    },
  });

  const FORM_CONFIG = useMemo(
    () => [
      {
        htmlFor: 'title',
        label: 'Name',
        type: 'text',
        onChange: handleChange,
        value: values.title,
        className: errors.title ? 'errorStyles' : '',
      },
      {
        htmlFor: 'description',
        label: 'Description',
        type: 'text',
        onChange: handleChange,
        value: values.description,
        className: errors.description ? 'errorStyles' : '',
      },
      {
        htmlFor: 'price',
        label: 'Price',
        type: 'text',
        onChange: handleChange,
        value: values.price,
        className: errors.price ? 'errorStyles' : '',
      },
      {
        htmlFor: 'rating',
        label: 'Rating',
        type: 'text',
        onChange: handleChange,
        value: values.rating,
        className: errors.rating ? 'errorStyles' : '',
      },
      {
        htmlFor: 'stock',
        label: 'Stock',
        type: 'text',
        onChange: handleChange,
        value: values.stock,
        className: errors.stock ? 'errorStyles' : '',
      },
      {
        htmlFor: 'category',
        label: 'Category',
        type: 'text',
        onChange: handleChange,
        value: values.category,
        className: errors.category ? 'errorStyles' : '',
      },
    ],
    [
      errors.category,
      errors.description,
      errors.price,
      errors.rating,
      errors.stock,
      errors.title,
      handleChange,
      values.category,
      values.description,
      values.price,
      values.rating,
      values.stock,
      values.title,
    ]
  );

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      {FORM_CONFIG.map(({ htmlFor, label, type, onChange, value, className }) => (
        <FormInput
          key={label}
          htmlFor={htmlFor}
          label={label}
          type={type}
          onChange={onChange}
          value={value}
          className={className}
        />
      ))}
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};
