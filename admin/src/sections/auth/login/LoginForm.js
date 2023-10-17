import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { API_URL } from '../../../constants/General';
import Iconify from '../../../components/iconify';
// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    pass: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleClick = async () => {
    try {
      const res = await axios.post(`${API_URL}/loginUser`, {
        email: formValues.email,
        password: formValues.password,
      });
      localStorage.setItem('token', res.data.token);
      toast.success(res.data.message);
      navigate('/admin/dashboard', { replace: true });
    } catch (error) {
      console.log(error);
      if (error.message === 'Request failed with status code 401') {
        toast.error('Invalid Credentials');
      }
      toast.error(error || 'error occured');
      console.log(error);
    }
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" value={formValues.email} onChange={handleChange} />
        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={formValues.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  );
}
