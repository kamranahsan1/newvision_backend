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

const CreateCategory = () => {
  const [passportNumber, setPassportNumber] = useState('');
  const [isValidPassport, setIsValidPassport] = useState(true);
  const navigate = useNavigate();
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
        const res = await axios.post(`${API_URL}/postcategory`, formData);
        toast.success(res.data.message);
        navigate('/admin/dashboard/categories');
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

                <div className="submitbtn1 col-sm-12">
                  <Form.Group controlId="validationCustom05">
                    <Button type="submit">Create Category</Button>
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
export default CreateCategory;
