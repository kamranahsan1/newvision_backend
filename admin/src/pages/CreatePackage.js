import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './createpackage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../constants/General';

const CreatePackage = () => {
  const [passportNumber, setPassportNumber] = useState('');
  const [isValidPassport, setIsValidPassport] = useState(true);
  const [Categories, SetCategories] = useState([]);
  const [Country, SetCountry] = useState([]);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: '',
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
  const [mainImage, setmainImage] = useState();
  const [preview, setPreview] = useState();
  const onSelectFileProfile = (e) => {
    setmainImage(e.target.files[0]);
  };
  const { name, description, inclusionsList, attractions, category, featured, country, errors, countryCode, status } =
    formValues;

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
        formData.append('inclusionsList', inclusionsList);
        formData.append('attractions', attractions);
        formData.append('category', category);
        formData.append('featured', featured);
        formData.append('country', country);
        formData.append('countryCode', countryCode);
        formData.append('status', status);
        formData.append('mainImage', mainImage);
        console.log(formData);
        const res = await axios.post(`${API_URL}/CreatePackage`, formData);
        toast.success('form submitted');
        navigate('/dashboard/package');
      } catch (error) {
        toast.error(error.response.data.message.message || 'error occured');
        console.log(error);
      }
    }
  };
  return (
    <div className="container-fluid register">
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
                    <Form.Control.Feedback type="invalid">'Please provide name.'</Form.Control.Feedback>
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
                  {/*
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      placeholder="country"
                      onChange={handleChange}
                      value={country}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please provide a valid country.</Form.Control.Feedback>
                  </Form.Group>
                  */}
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>Country</Form.Label>
                    <Form.Select name="country" value={country} onChange={handleChange} required>
                      {Country.map((item, i) => {
                        return <option value={item.name}>{item.name}</option>;
                      })}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Please provide a valid category.</Form.Control.Feedback>
                  </Form.Group>
                </div>

                {/* <div className="col-sm-6">
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>category</Form.Label>
                    <Form.Control
                      name="category"
                      type="text"
                      placeholder="category"
                      value={category}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please provide a valid category.</Form.Control.Feedback>
                  </Form.Group>
                </div> */}
                {/* <div className="col-sm-6">
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>Featured</Form.Label>
                    <Form.Control
                      name="Featured"
                      type="text"
                      placeholder="Featured"
                      value={Featured}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please provide a valid Featured.</Form.Control.Feedback>
                  </Form.Group>
                </div> */}

                <div className="col-sm-6">
                  <Form.Group controlId="validationCustom05">
                    <Form.Label>Status</Form.Label>
                    <Form.Select name="status" value={status} onChange={handleChange} required>
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
                    <Form.Control onChange={onSelectFileProfile} type="file" required />
                    <Form.Control.Feedback type="invalid">'Please provide a valid Main Image'</Form.Control.Feedback>
                  </Form.Group>
                  {/* {PassportPicture && (
                      <>
                        <img src={preview} className="PreviewImage" alt="" />
                      </>
                    )} */}
                </div>
                {/* <div className="col-sm-6">
                <Form.Group controlId="validationCustom05">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={state.Password}
                    onChange={handlePasswordChange}
                    name="price"
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
                    name="price"
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
                <div className="col-sm-12">
                  <Form.Group controlId="validationCustom04">
                    <Form.Label>Attractions(for points seperate line from $ Sign)</Form.Label>
                    <Form.Control
                      type="text"
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
                    <Form.Label>Inclusions List(for points seperate line from $ Sign)</Form.Label>
                    <Form.Control
                      type="text"
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
                    <Button type="submit">Create Package</Button>
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
export default CreatePackage;
