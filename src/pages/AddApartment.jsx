

import React, { useState } from "react";
import axios from "axios";
import "../components/3.css";
import {  useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import {AddApartmentYuup} from '../schemas/AddApartmentYup'
import { useFormik } from "formik";
const initialValues = {

name:"",
address:"",
city:"",
state:"",
furnish :"",
atype:"",
ebill:"",
extra:"",
gender:"",
rent:"",
totalbeds:""
}

export default function AddApartment() {
  return (
    <div>
      <AddApartmentTable />
    </div>
  );
}

function AddApartmentTable() {
  const navigate=useNavigate()
  
  const [pic1, setpic1] = useState("");
  const [pic2, setpic2] = useState("");
  const [pic3, setpic3] = useState("");
  const [pic4, setpic4] = useState("");

  const handleFile1Input=e=>{
      setpic1(e.target.files[0])
  }
  const handleFile2Input=e=>{
      setpic2(e.target.files[0])
  }
  const handleFile3Input=e=>{
      setpic3(e.target.files[0])
  }
  const handleFile4Input=e=>{
      setpic4(e.target.files[0])
  }

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
  

    initialValues: initialValues,
    validationSchema: AddApartmentYuup,
    onSubmit:  async (value) => {

      console.log(errors)
    const fd=new FormData()
    fd.append("name",value.name)
    fd.append("city",value.city)
    fd.append("district",value.state)
    fd.append("rent",value.rent)
    fd.append("flattype",value.atype)
    fd.append("pic1",pic1)    
    fd.append("pic2",pic2)    
    fd.append("pic3",pic3)    
    fd.append("pic4",pic4)    
    fd.append("furnishtype",value.furnish)
    fd.append("gender",value.gender)
    fd.append("address",value.address)
    fd.append("lightbill",value.ebill)
    fd.append("extra",value.extra)
    fd.append("totalbeds",value.totalbeds)
    fd.append("ownerid",sessionStorage.getItem("id"))



    if(pic1===""||pic1===undefined||pic1===null||pic2===""||pic2===undefined||pic2===null
    ||pic3===""||pic3===undefined||pic3===null||pic4===""||pic4===null||pic4===undefined)
    {  swal.fire({
        position: "center",
        title: "Please Upload Image",
        timer: 1500,
      });
      return
    }
    const url = `http://localhost:8080/api/apartments`;
    await axios.post(url, fd)
    .then(resp=>{
      swal.fire({
            position: "center",
            icon: "success",
            title: "Apartment Added..",
            showConfirmButton: false,
            timer: 1500,
          });
      navigate("/apartments")
    })
    .catch(error=>{
      swal.fire({
            position: "center",
            icon: "error",
            title: error.response.data,
            showConfirmButton: false,
            timer: 1500,
          });
    });
  }
});
console.log(pic1);
console.log(pic2);
console.log(pic3);
console.log(pic4);
  return (
    <div className="container mt-5">
      <div className="title">Apartment Registration</div>
      <form onSubmit={handleSubmit} >
        <div className="user-details">
          <div className="input-box">
            <span className="details">Apartment Name
            {errors.name && touched.name ? (<span className="errors">{errors.name}
              </span>) : null}
            </span>
            <input
              type="text"
              placeholder="Enter your name"
              id="firstName"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <span className="details">Address
            {errors.address && touched.address ? (<span className="errors">{errors.address}
              </span>) : null}
            </span>
            <input
              type="text"
              placeholder="Enter address"
              id="emailid"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <span className="details">City
            {errors.city && touched.city ? (<span className="errors">{errors.city}
              </span>) : null}
            </span>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}             
            />
          </div>          
          
          <div className="input-box">
            <span className="details">State
            {errors.state && touched.state ? (<span className="errors">{errors.state}
              </span>) : null}
            </span>
            <input
              type="text"
              placeholder="Enter state"
              name="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}

            />
          </div>
          <div className="input-box">
            <span className="details">Monthly Rent
            {errors.rent && touched.rent ? (<span className="errors">{errors.rent}
              </span>) : null}
            </span>
            <input
              type="number"
              min={1}
              placeholder="Enter your rent"
              name="rent"
              value={values.rent}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <span className="details">Electricity bill
            {errors.ebill && touched.ebill ? (<span className="errors">{errors.ebill}
              </span>) : null}
            </span>
            <input
              type="number"
              min={1}
              name="ebill"
              placeholder="Enter your rent"
              value={values.ebill}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <span className="details">Extra Features
            {errors.extra && touched.extra ? (<span className="errors">{errors.extra}
              </span>) : null}
            </span>
            <input
              type="text"              
              placeholder="Enter extra features"
              name="extra"
              value={values.extra}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          
          <div className="input-box">
            <span className="details">Gender
            {errors.gender && touched.gender ? (<span className="errors">{errors.gender}
              </span>) : null}            
            </span>
            <select
              name="gender"
              value={values.gender}
              onChange={handleChange}
              onBlur={handleBlur}
            //  required
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">Select Apartment Type
            {errors.atype && touched.atype ? (<span className="errors">{errors.atype}
              </span>) : null}
            </span>
            <select
            name="atype"
              value={values.atype}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option>Select Type</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>2 RK</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">Select Furnish Type
            {errors.furnish && touched.furnish ? (<span className="errors">{errors.furnish}
              </span>) : null}
            </span>
            <select
              name="furnish"
              value={values.furnish}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option>Select Type</option>
              <option>Full Furnished</option>
              <option>Semi Furnished</option>
              <option>Unfurnished</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">Beds Capacity
            {errors.totalbeds && touched.totalbeds ? (<span className="errors">{errors.totalbeds}
              </span>) : null}
            </span>
            <input
              type="number"
              name="totalbeds"
              min={1}
              placeholder="Enter beds Available"
              value={values.totalbeds}
              onChange={handleChange}
              onBlur={handleBlur}
              
            />
          </div>
          <div className="input-box">
            <span className="details">Photo 1</span>
            <input
              type="file"
              placeholder="First Photo"
               onChange={handleFile1Input}
            />
          </div>
          <div className="input-box">
            <span className="details">Photo 2</span>
            <input
              type="file"
              placeholder="First Photo"
             onChange={handleFile2Input}
            />
          </div>
          <div className="input-box">
            <span className="details">Photo 3</span>
            <input
              type="file"
              placeholder="First Photo"
             onChange={handleFile3Input}
             
            />
          </div>
          <div className="input-box">
            <span className="details">Photo 4</span>
            <input
              type="file"
              placeholder="First Photo"
             onChange={handleFile4Input}
             
            />
          </div>
        </div>
        
        <div className="button">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
