
'use client'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';



import { ToastContainer, toast } from 'react-toastify';
import { loginValidationSchema,  } from '@/validation/validation';
import { useRouter } from 'next/navigation';
import { login, signup } from '@/api/userservice';



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

const SignUp = () => {

  const router = useRouter();
 
  const formik = useFormik({
    initialValues: {
        name:'',
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
     
      console.log('Form values:', values);
try {
    const response =await  signup('/register',values)
    const token = response.token;
 
 

        router.push("/login")

    console.log(response);
} catch (error:any) {
   
    
}
      
    },
  });

  return (
    <Container>
        <ToastContainer/>
      <StyledForm onSubmit={formik.handleSubmit}>

      <StyledTextField
          label="name"
          variant="outlined"
          fullWidth
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
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
          Register
        </SubmitButton>
      </StyledForm>
    </Container>
  );
};

export default SignUp;




