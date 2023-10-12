


import axios from "axios"

import { useNavigate } from "react-router-dom"
// import '../components/Error.css';
import {  useFormik } from "formik";
import Swal from "sweetalert2";

import { ForgetPasswordReset } from "../schemas/ForgetPasswordYup";

const initialValues = {

    id:"",
    question:"",
    answer:"",
    password:"",
    conformpassword:""
  }

  export default function Forgetpassword() {
    return (
      <div>
        <ForgotPasswordTable />
      </div>
    );
  }

 function ForgotPasswordTable(){
    const navigate=useNavigate()

    const { values, errors, touched, handleSubmit, handleChange, handleBlur }

     =useFormik({

        initialValues: initialValues,
        validationSchema:ForgetPasswordReset,
        onSubmit: (value) => {

            console.log(value)
           
                    const data={
                        "answer":value.answer,
                        "userid":value.id,
                        "question":value.question,
                        "pwd":value.password   
                    }
            
                    axios.post('http://localhost:8080/api/admin/reset',data)
                    .then(resp=>{
                        Swal.fire({title:resp.data})
                        navigate('/login')
                    })
                    .catch(error=>{
                        Swal.fire({title:error.response.data})        
                    })
                }
        
        });
    return(
        <>
        <div className="container mt-5">
            <h5>Forogot Password</h5>
            <div className="row">
                <div className="col-sm-5 mx-auto">
            <form onSubmit={handleSubmit}>
                  <div>
                    <div className="mb-3 row">
                        
                        <label className="col-sm-4 col-form-label">User Id                     
                        </label>

                        <div className="col-sm-8">
                        {errors.id && touched.id ? (<span className="errors">{errors.id}
              </span>) : null}
                        <input 
                        
                        type="text"
                        name="id"
                        value={values.id}
                        onChange={handleChange}
                        onBlur={handleBlur}
                         className="form-control"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-4 col-form-label">Security Question</label>
                        <div className="col-sm-8">
                        {errors.question && touched.question ? (<span className="errors">{errors.question}
              </span>) : null}
                         <select className="form-control"
                        name="question"
                            value={values.question}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            >
                            <option>Select Security Question</option>
                            <option>What is your nick name ?</option>
                            <option>Which is your favorite pet name ?</option>
                        </select> 
                         </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-4 col-form-label">Answer</label>
                        <div className="col-sm-8">
                        {errors.answer && touched.answer ? (<span className="errors">{errors.answer}
              </span>) : null}
                        <input                        
                        type="text" 
                    
                        name="answer"
                        value={values.answer}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        
                         className="form-control"/>
                        </div> 
                    </div> 
                    <div className="mb-3 row">
                        <label className="col-sm-4 col-form-label">New Password</label>
                        <div className="col-sm-8">
                        {errors.password && touched.password ? (<span className="errors">{errors.password}
              </span>) : null}
                        <input
                         type="password" 
                         name="password"
                     
                        value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        className="form-control"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-4 col-form-label">Repeat Password</label>
                        <div className="col-sm-8">
                        {errors.password && touched.password ? (<span className="errors">{errors.password}
              </span>) : null}
                         <input
                         type="password" 
                         name="conformpassword"
                         value={values.conformpassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                         className="form-control"/>
                        </div> 
                    </div> 
                    
                     <input type={'submit'}  value="Reset Now" className="bg-sussess "/> 
                </div>
            </form>
                </div>
            </div>
        </div>
            
        </>
    )
}