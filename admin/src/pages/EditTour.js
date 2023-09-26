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

const CreateTour = () => {
  const [Data, SetData] = useState();
  const [passportNumber, setPassportNumber] = useState('');
  const [isValidPassport, setIsValidPassport] = useState(true);
  const navigate = useNavigate();
  const [mainImage, setmainImage] = useState();
  const { state } = useLocation();
  if (!state) {
    navigate('/dashboard/app');
  }
  const [preview, setPreview] = useState();
  const onSelectFileProfile = (e) => {
    setmainImage(e.target.files[0]);
  };
  const LoadData = async () => {
    const response = await axios.get(`${API_URL}/SingleTour/${state}`);
    console.log(response.data.data);
    setFormValues({
      name: response.data.data.name,
      type: response.data.data.type,
      Day: response.data.data.Day,
      country: response.data.data.country,
      description: response.data.data.description,
      time: response.data.data.time,
    });
    setmainImage(response.data.data.mainImage);
    console.log(formValues);
    SetData(response.data.data);
  };
  useEffect(() => {
    LoadData();
  }, []);
  const [formValues, setFormValues] = useState({
    name: '',
    type: '',
    Day: '',
    country: '',
    description: '',
    time: '',

    errors: {},
  });
  const { name, type, Day, category, description, country, time } = formValues;
  const [Countries, setCountries] = useState([]);
  const LoadCountries = async () => {
    const Data = await axios.get(`${API_URL}/countries`);
    console.log(Data.data);
    setCountries(Data.data);
  };
  useEffect(() => {
    LoadCountries();
  }, []);
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
        formData.append('type', type);
        formData.append('Day', Day);
        formData.append('description', description);
        formData.append('country', country);
        formData.append('mainImage', mainImage);
        formData.append('time', time);
        const res = await axios.put(`${API_URL}/EditTour/${state}`, formData);
        toast.success(res.data.message);
        navigate('/dashboard/tours');
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
                    <Form.Control.Feedback type="invalid">'Please provide Name.'</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom03">
                    <Form.Label>Day</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Which Day Add Number"
                      value={Day}
                      name="Day"
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please provide Day</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom03">
                    <Form.Label>Time</Form.Label>
                    <Form.Select value={time} name="time" onChange={handleChange} required>
                      <option value="">Select time</option>
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Evening">Evening</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Please select a time</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>Type</Form.Label>
                    <Form.Select name="type" value={type} onChange={handleChange} required>
                      <option value="">Select type</option>
                      <option value="attraction">Attraction</option>
                      <option value="event-visit">Event Vsit</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Please provide a valid status.</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>Main Image</Form.Label>
                    <Form.Control onChange={onSelectFileProfile} type="file" />
                    {/* <Form.Control.Feedback type="invalid">'Please provide a valid Main Image'</Form.Control.Feedback> */}
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
                <div className="col-sm-12">
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
                <div className="submitbtn1 col-sm-12">
                  <Form.Group controlId="validationCustom05">
                    <Button type="submit">Edit Tour</Button>
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
export default CreateTour;
