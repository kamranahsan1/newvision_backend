import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js'

import './createpackage.css';
import { useLocation, useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

import { API_URL } from '../constants/General';

const EditCategory = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  if (!state) {
    navigate('/dashboard/app');
  }
  const [Data, SetData] = useState([]);
  const LoadData = async () => {
    const response = await axios.get(`${API_URL}/SingleCategory/${state}`);
    console.log(response.data.data);
    setFormValues(response.data.data);
    console.log(formValues);
  };
  useEffect(() => {
    LoadData();
  }, []);
  const [passportNumber, setPassportNumber] = useState('');
  const [isValidPassport, setIsValidPassport] = useState(true);
  const [formValues, setFormValues] = useState({
    name: '',
    slug: '',
    description: '',
    viewType: '',

    errors: {},
  });
  const { name, slug, description, viewType } = formValues;

  const handlePassportNumberChange = (e) => {
    const newValue = e.target.value;
    setPassportNumber(newValue);

    // Define your passport number regular expression pattern
    const passportNumberPattern = /^[A-Z0-9]{6,15}$/;

    // Test if the input matches the pattern
    const isValid = passportNumberPattern.test(newValue);
    setIsValidPassport(isValid);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const [validated, setValidated] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else if (isValidPassport) {
      try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('slug', slug);
        formData.append('description', description);
        formData.append('viewType', viewType);
        console.log(formData);
        const res = await axios.put(`${API_URL}/EditCategory/${state}`, formData);
        toast.success(res.data.message);
        navigate('/dashboard/categories');
      } catch (error) {
        toast.error(error.response.data.message.message || 'error occured');
        console.log(error);
      }
    }
  };
  return (
    <div className="contain er-fluid register">
      <div className="row">
        <div className="col-sm-6">
          <div className="registration">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              {/* <img src="/assets/logo.png" alt="" /> */}

              <div className="row">
                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom03">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">'Please provide Name.'</Form.Control.Feedback>
                  </Form.Group>
                </div>

                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom03">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="description"
                      value={description}
                      name="description"
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please provide Description</Form.Control.Feedback>
                  </Form.Group>
                </div>

                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom04">
                    <Form.Label>Slug</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="slug"
                      value={slug}
                      name="slug"
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please provide a Slug</Form.Control.Feedback>
                  </Form.Group>
                </div>

                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>viewType</Form.Label>
                    <Form.Select name="viewType" value={viewType} onChange={handleChange} required>
                      <option value="quick">quick</option>
                      <option value="detail">detail</option>
                    </Form.Select>

                    <Form.Control.Feedback type="invalid">Please provide a valid Nationality.</Form.Control.Feedback>
                  </Form.Group>
                </div>

                {/* <div className="col-sm-6">
                <Form.Group controlId="validationCustom05">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={state.Password}
                    onChange={handlePasswordChange}
                    name="password"
                    type="text"
                    placeholder="Password"
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please provide a valid Password.</Form.Control.Feedback>
                  {passwordError && (
                    <div className="error-message1" style={{ color: '#fff' }}>
                      {passwordError}
                    </div>
                  )}
                </Form.Group>
              </div>

              <div className="col-sm-6">
                <Form.Group controlId="validationCustom05">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    value={state.ConfirmPassword}
                    onChange={handleConfirmPasswordChange}
                    name="password"
                    type="text"
                    placeholder="Confirm Password"
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please provide a valid Password.</Form.Control.Feedback>
                  {confirmPasswordError && (
                    <div className="error-message1" style={{ color: '#fff' }}>
                      {confirmPasswordError}
                    </div>
                  )}
                </Form.Group>
              </div>

              <div className="col-sm-6">
                <Form.Group controlId="validationCustom05">
                  <Form.Label>Profile Picture</Form.Label>
                  <Form.Control onChange={onSelectFileProfile} type="file" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Profile Picture.
                  </Form.Control.Feedback>
                </Form.Group>
                {PassportPicture && (
                    <>
                      <img src={preview} className="PreviewImage" alt="" />
                    </>
                  )}
              </div> */}

                {/* <div className="col-sm-6">
                <Form.Group controlId="validationCustom05">
                  <Form.Label>Passport Picture</Form.Label>
                  <Form.Control onChange={onSelectFilePassport} type="file" />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Passport Picture.
                  </Form.Control.Feedback>
                </Form.Group>
                {PassportPicture && (
                  <div>
                    <img src={preview1} className="PreviewImage" alt="" />
                    <i className="fa fa-times" onClick={removeImagePreview}></i>
                  </div>
                )}
              </div> */}

                <div className="submitbtn1 col-sm-12">
                  <Form.Group controlId="validationCustom05">
                    <Button type="submit">Edit Category</Button>
                  </Form.Group>
                </div>
              </div>
            </Form>
          </div>
        </div>

        {/* <div className="col-sm-6 registrationimg">
          <img src={images} alt="asd" />
        </div> */}
      </div>
    </div>
  );
};
export default EditCategory;
