import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js'

import './createpackage.css';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

import { useNavigate, useLocation } from 'react-router-dom';
import { API_URL } from '../constants/General';

const CreateVisaCategory = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  if (!state) {
    navigate('/dashboard/app');
  }
  const [Data, SetData] = useState([]);
  const LoadData = async () => {
    const response = await axios.get(`${API_URL}/SingleVisaCategory/${state}`);
    console.log(response.data.data);
    setFormValues({
      name: response.data.data.name,
      isNavigation: response.data.data.isNavigation,
      status: response.data.data.status,
      slug: response.data.data.slug,
      description: response.data.data.description,
    });
    setmainImage(response.data.data.mainImage);
    console.log(formValues);
    SetData(response.data.data);
  };
  useEffect(() => {
    LoadData();
  }, []);
  const [passportNumber, setPassportNumber] = useState('');
  const [isValidPassport, setIsValidPassport] = useState(true);

  const [mainImage, setmainImage] = useState();
  const [preview, setPreview] = useState();
  const onSelectFileProfile = (e) => {
    setmainImage(e.target.files[0]);
  };
  const [formValues, setFormValues] = useState({
    name: '',
    isNavigation: '',
    status: '',
    slug: '',
    description: '',
    errors: {},
  });
  const { name, status, slug, description } = formValues;

  const handlePassportNumberChange = (e) => {
    const newValue = e.target.value;
    setPassportNumber(newValue);
    const passportNumberPattern = /^[A-Z0-9]{6,15}$/;
    const isValid = passportNumberPattern.test(newValue);
    setIsValidPassport(isValid);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
      slug: formValues.name.toLowerCase().replace(/\s+/g, '-'),
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
        formData.append('status', status);
        formData.append('slug', slug);
        formData.append('description', description);
        formData.append('previousimage', Data.mainImage);
        formData.append('isNavigation', isNavigation);
        formData.append('mainImage', mainImage);

        console.log(formData);
        const res = await axios.put(`${API_URL}/EditVisaCategory/${state}`, formData);
        toast.success(res.data.message);
        navigate('/dashboard/visacategories');
      } catch (error) {
        toast.error(error.response.data.message.message || 'error occured');
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
                  </Form.Group>
                </div>

                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom03">
                    <Form.Label>Slug</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="slug"
                      value={slug}
                      name="slug"
                      onChange={handleChange}
                      disabled
                      style={{
                        backgroundColor: '#cbc6c6',
                        color: '#808080',
                      }}
                    />
                    <Form.Control.Feedback type="invalid">Please provide slug</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>Status</Form.Label>
                    <Form.Select name="status" value={status} onChange={handleChange} required>
                      <option value="">Select status</option>
                      <option value="1">Active</option>
                      <option value="0">Not Active</option>
                    </Form.Select>

                    <Form.Control.Feedback type="invalid">Please provide a valid status.</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom06">
                    <Form.Label>Add in Navigation?</Form.Label>
                    <Form.Select name="isNavigation" value={isNavigation} onChange={handleChange} required>
                      <option value="">Select option</option>
                      <option value="0">No</option>
                      <option value="1">Yes</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Please select an option.</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom04">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="description"
                      value={description}
                      name="description"
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid"> Please provide a description</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>Main Image</Form.Label>
                    <Form.Control onChange={onSelectFileProfile} type="file" />
                    {/* <Form.Control.Feedback type="invalid">'Please provide a valid Main Image'</Form.Control.Feedback> */}
                  </Form.Group>
                </div>
                <div className="submitbtn1 col-sm-12">
                  <Form.Group controlId="validationCustom05">
                    <Button type="submit">Edit Visa</Button>
                  </Form.Group>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateVisaCategory;
