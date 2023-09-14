import * as Yup from 'yup';

export const addressValidationSchema = Yup.object().shape({
  name: Yup.string(),
  street: Yup.string().required(),
  zip: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  country: Yup.string().required(),
});

export const addressFormValidationSchema = Yup.object().shape({
  shipping: addressValidationSchema,
  billing: addressValidationSchema,
});

export const addressModalValidationSchema = Yup.object().shape({
  address: addressValidationSchema,
});
