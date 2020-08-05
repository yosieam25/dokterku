import {useState} from 'react';

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (type, value) => {
      return setValues({...values, [type]: value});
    },
  ];
};
