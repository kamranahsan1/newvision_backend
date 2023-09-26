import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js'

import './createpackage.css';
import { useLocation, useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

import { API_URL, setImage } from '../constants/General';

const EditPackage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [mainImage, setmainImage] = useState();
  if (!state) {
    navigate('/dashboard/app');
  }
  console.log('state', state);
  const onSelectFileProfile = (e) => {
    setmainImage(e.target.files[0]);
  };
  const [Data, SetData] = useState([]);
  const LoadData = async () => {
    const response = await axios.get(`${API_URL}/SinglePackage/${state}`);
    setFormValues(response.data.data);
  };
  useEffect(() => {
    LoadData();
  }, []);
  const [passportNumber, setPassportNumber] = useState('');
  const [isValidPassport, setIsValidPassport] = useState(true);
  const [Categories, SetCategories] = useState([]);
  const [Country, SetCountry] = useState([]);
  const [formValues, setFormValues] = useState({
    name: '',
    slug: '',
    description: '',
    inclusionsList: '',
    price: '',
    country: '',
    attractions: '',
    category: '',
    featured: '',
    countryCode: '',
    status: '',
    errors: {},
  });
  const {
    name,
    slug,
    description,
    inclusionsList,
    attractions,
    category,
    featured,
    country,
    errors,
    countryCode,
    status,
  } = formValues;

  const LoadCategories = async () => {
    const CategoryData = await axios.get(`${API_URL}/categories`);
    SetCategories(CategoryData.data);
  };

  const LoadCountry = async () => {
    const CountryData = await axios.get(`${API_URL}/countries`);
    SetCountry(CountryData.data);
  };

  useEffect(() => {
    LoadCategories();
    LoadCountry();
  }, [category, country]);

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
        formData.append(
          'slug',
          name
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .replace(/-+/g, '-')
            .slice(0, 50)
        );
        formData.append('description', description);
        formData.append('inclusionsList', inclusionsList);
        formData.append('attractions', attractions);
        formData.append('category', category);
        formData.append('featured', featured);
        formData.append('country', country);
        formData.append('countryCode', countryCode);
        formData.append('status', status);
        formData.append('mainImage', mainImage);
        console.log(formData);
        const res = await axios.post(`${API_URL}/editPackage/${state}`, formData);
        toast.success(res.data.message);
        navigate('/dashboard/package');
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
                      placeholder="name"
                      value={name}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please provide name.</Form.Control.Feedback>
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
                    <Form.Control.Feedback type="invalid">Please provide a Last name.</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>Country</Form.Label>
                    <Form.Select name="country" value={country} onChange={handleChange} required>
                      <option value="">Select Country</option>
                      {Country.map((item, i) => {
                        return <option value={item.name}>{item.name}</option>;
                      })}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Please provide a valid category.</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>Status</Form.Label>
                    <Form.Select name="status" value={status} onChange={handleChange} required>
                      <option value="">Select Status</option>
                      <option value="1">Active</option>
                      <option value="0">Not Active</option>
                    </Form.Select>

                    <Form.Control.Feedback type="invalid">Please provide a valid status.</Form.Control.Feedback>
                  </Form.Group>
                </div>

                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>Category</Form.Label>
                    <Form.Select name="category" value={category} onChange={handleChange} required>
                      {Categories.map((item, i) => {
                        return <option value={item._id}>{item.name}</option>;
                      })}
                    </Form.Select>

                    <Form.Control.Feedback type="invalid">Please provide a valid category.</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom04">
                    <Form.Label>Featured</Form.Label>
                    <Form.Select value={featured} name="featured" onChange={handleChange} required>
                      <option value="">Select an option</option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Please select an option.</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-12">
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>Main Image</Form.Label>
                    <Form.Control onChange={onSelectFileProfile} type="file" />
                  </Form.Group>
                </div>
                <div className="col-sm-12">
                  <Form.Group controlId="validationCustom04">
                    <Form.Label>Attractions(For points Use New Line)</Form.Label>
                    <Form.Control
                      as="textarea"
                      row={8}
                      placeholder="attractions"
                      value={attractions}
                      name="attractions"
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid"> Please provide a attractions.</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-12">
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>Inclusions List(For points Use New Line)</Form.Label>
                    <Form.Control
                      as="textarea"
                      row={8}
                      value={inclusionsList}
                      name="inclusionsList"
                      placeholder="inclusionsList"
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please provide a valid inclusionsList.</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="submitbtn1 col-sm-12">
                  <Form.Group controlId="validationCustom05">
                    <Button type="submit">Edit Package</Button>
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
export default EditPackage;
