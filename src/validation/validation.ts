
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const loginValidationSchema= Yup.object({
   
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
    
  })

  
export const signupValidationSchema= Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
    
  })