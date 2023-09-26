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

const CreateTour = () => {
  const [passportNumber, setPassportNumber] = useState('');
  const [isValidPassport, setIsValidPassport] = useState(true);
  const navigate = useNavigate();
  const [mainImage, setmainImage] = useState();
  const [preview, setPreview] = useState();
  const onSelectFileProfile = (e) => {
    setmainImage(e.target.files[0]);
  };
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
        console.log(formData);
        const res = await axios.post(`${API_URL}/CreateTour`, formData);
        toast.success(res.data.message);
        navigate('/dashboard/tours');
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
                    <Form.Control onChange={onSelectFileProfile} type="file" required />
                    <Form.Control.Feedback type="invalid">'Please provide a valid Main Image'</Form.Control.Feedback>
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
                    <Button type="submit">Create Tour</Button>
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
