import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js'

import './createpackage.css';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import { API_URL } from '../constants/General';

const CreateCountry = () => {
  const [passportNumber, setPassportNumber] = useState('');
  const [isValidPassport, setIsValidPassport] = useState(true);
  const [mainImage, setmainImage] = useState();

  const onSelectFileProfile = (e) => {
    setmainImage(e.target.files[0]);
  };

  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    featured: '',
    mainImage: null,
    errors: {},
  });
  const { name, description, featured } = formValues;

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

  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0];
    setFormValues({
      ...formValues,
      mainImage: selectedImage,
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
        formData.append('description', description);
        formData.append('featured', featured);
        formData.append('mainImage', mainImage);

        const res = await axios.post(`${API_URL}/createCountry`, formData);
        toast.success(res.data.message);
        navigate('/dashboard/countries');
      } catch (error) {
        toast.error(error.response.data.message || 'error occured');
      }
    }
  };
  return (
    <div className="contain er-fluid register">
      <div className="row">
        <div className="col-sm-8">
          <div className="registration">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                    <Form.Label>Is Featured</Form.Label>
                    <Form.Control as="select" value={featured} name="featured" onChange={handleChange} required>
                      <option value="1" {...(featured === 1 ? 'selected' : '')}>
                        Yes
                      </option>
                      <option value="0" {...(featured === 0 ? 'selected' : '')}>
                        No
                      </option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">Please select an option</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>Main Image</Form.Label>
                    <Form.Control onChange={onSelectFileProfile} type="file" required />
                    <Form.Control.Feedback type="invalid">'Please provide a valid Main Image'</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="submitbtn1 col-sm-12">
                  <Form.Group controlId="validationCustom05">
                    <Button type="submit">Create Country</Button>
                  </Form.Group>
                </div>
                {mainImage && (
                  <div className="col-sm-6">
                    <img
                      style={{
                        width: 'auto',
                      }}
                      src={URL.createObjectURL(mainImage)}
                      className="PreviewImage"
                      alt=""
                    />
                  </div>
                )}
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
export default CreateCountry;
