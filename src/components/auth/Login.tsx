
'use client'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';



import { ToastContainer, toast } from 'react-toastify';
import { loginValidationSchema,  } from '@/validation/validation';
import { useRouter } from 'next/navigation';

import { login } from '@/api/userservice';



// Styled components
const Container = styled.div`
  text-align: center;
  margin-top: 15rem;

`;

const StyledForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 16px;
  }
`;

const SubmitButton = styled(Button)`
  && {
    width: 100%;
  }
`;

const Login = () => {

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
     
      console.log('Form values:', values);
try {
    const response =await login('/login',values)
    
    const token = response?.token;
 
      
        localStorage.setItem('token', token);
        router.push("/")

    console.log(response);
} catch (error:any) {
   
    toast.error("please provide valid password or Emai")
}
      
    },
  });

  return (
    <Container>
        <ToastContainer/>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledTextField
          label="Email"
          variant="outlined"
          fullWidth
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <StyledTextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <SubmitButton type="submit" variant="contained" style={{backgroundColor:"Black"}}>
          Login
        </SubmitButton>
      </StyledForm>
    </Container>
  );
};

export default Login;
