import * as yup from 'yup';

export const productSchema = yup.object({
  title: yup.string().required(),
  description: yup.string(),
  price: yup.number().required('Requires non negative value').positive().integer(),
  rating: yup.number().required('Requires non negative value'),
  stock: yup.number().required('Requires non negative value'),
  category: yup.string().required(),
});
