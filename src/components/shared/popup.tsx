
'use client'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import { updateUser } from '@/api/userservice'; 
import styled from '@emotion/styled';
import { loginValidationSchema } from '@/validation/validation';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

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

const EditModal = ({ open, onClose }:any) => {

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
    const response =await updateUser('/update-user',values)
  
    const token = response?.token;
 
      
        localStorage.setItem('token', token);
        router.push("/")

    console.log(response);
    toast.error("Successfully updated user")
    onClose()
} catch (error:any) {
   
   
}
      
    },
  });

  return (
    <Dialog open={open} onClose={onClose}>
          <ToastContainer/>
      <DialogTitle>Edit User </DialogTitle>
      <DialogContent>
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
          update
        </SubmitButton>
      </StyledForm>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
