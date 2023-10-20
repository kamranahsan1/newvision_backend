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

const CreateVisa = () => {
  const [passportNumber, setPassportNumber] = useState('');
  const [isValidPassport, setIsValidPassport] = useState(true);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: '',
    NumberOfStay: '',
    NumberOfStayName: '',
    category: '',
    country: '',
    description: '',

    errors: {},
  });
  const { name, NumberOfStay, NumberOfStayName, type, category, description, country } = formValues;
  const [mainImage, setmainImage] = useState();
  const [preview, setPreview] = useState();
  const onSelectFileProfile = (e) => {
    setmainImage(e.target.files[0]);
  };
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
  const [Categories, SetCategories] = useState([]);
  const LoadCategories = async () => {
    const CategoryData = await axios.get(`${API_URL}/visacategories?resultPerPage=100`);
    SetCategories(CategoryData.data);
  };
  const [Countries, setCountries] = useState([]);
  const LoadCountries = async () => {
    const Data = await axios.get(`${API_URL}/countries`);
    setCountries(Data.data);
  };
  useEffect(() => {
    LoadCategories();
    LoadCountries();
  }, []);

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
        formData.append('NumberOfStay', NumberOfStay);
        formData.append('NumberOfStayName', NumberOfStayName);
        formData.append('type', type);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('country', country);
        if (mainImage) {
          formData.append('mainImage', mainImage);
        }
        const res = await axios.post(`${API_URL}/PostVisa`, formData);
        toast.success(res.data.message);
        navigate('/admin/dashboard/visas');
      } catch (error) {
        toast.error(error.response.data.message.message || 'error occured');
        console.log(error);
      }
    }
  };
  return (
    <div className="container-fluid">
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
                    <Form.Label>Number Of Stay Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Number Of Stay Name"
                      value={NumberOfStayName}
                      name="NumberOfStayName"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </div>

                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom04">
                    <Form.Label>Number Of Stay</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="NumberOfStay"
                      value={NumberOfStay}
                      name="NumberOfStay"
                      onChange={handleChange}
                    />
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
                    <Form.Label>Country</Form.Label>
                    <Form.Select name="country" value={country} onChange={handleChange} required>
                      <option value="">Select country</option>
                      {Countries.length > 0 ? (
                        Countries.map((data) => {
                          return <option value={data._id}>{data.name}</option>;
                        })
                      ) : (
                        <></>
                      )}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Please provide a valid country.</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>Category</Form.Label>
                    <Form.Select name="category" value={category} onChange={handleChange} required>
                      <option value="">Select category</option>
                      {Categories.map((item, i) => {
                        return <option value={item._id}>{item.name}</option>;
                      })}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Please provide a valid category.</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom03">
                    <Form.Label>View type</Form.Label>
                    <Form.Control as="select" value={type} name="type" onChange={handleChange} required>
                      <option value="">Select view type</option>
                      <option value="quick">Quick</option>
                      <option value="detail">Detail</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">Please provide view type.</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>Main Image</Form.Label>
                    <Form.Control onChange={onSelectFileProfile} type="file" />
                  </Form.Group>
                </div>

                <div className="submitbtn1 col-sm-12">
                  <Form.Group controlId="validationCustom05">
                    <Button type="submit">Create Visa</Button>
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
export default CreateVisa;
