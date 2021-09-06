import React from 'react'
import { Input, Form } from 'reactstrap'
import { useForm } from 'react-hook-form';
import "../styles/reg.css"
import axios from "axios";
const SIGNUP_API = "http://localhost:5000/signup";
function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        console.warn(data)

        const signUpConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios.post(
            SIGNUP_API,
            JSON.stringify(data),
            signUpConfig
        )


    }

    return (
      <>
          <div className="container">
            <div class="signup-form">
                <form onSubmit={handleSubmit(onSubmit)} method="POST">
                    <h2>Sign Up</h2>
                    <p>It's free and only takes a minute.</p>
                   
                        <div class="form-group">
                            
                            <input id="user_name" type="text" className="form-control" placeholder="Full Name"
                                         {...register("fullname", { required: true })}
                                        />
                                        {errors.fullname && (<small className="text-danger"> This field is required</small>)}
                                        
                        </div>
                        <div class="form-group">
                        <input id="user_name" type="eamil" className="form-control" placeholder="Email"
                                         {...register("email", { required: true })}
                                        />
                                        {errors.email && (<small className="text-danger"> This field is required</small>)}
                                        
                        </div>
                        <div class="form-group">
                        <input id="user_phone" type="number" className="form-control" placeholder="Mobile"
                                         {...register("phone", { required: true,maxLength:10,minLength:10})} />
                                     {errors.phone && (<small className="text-danger">Length should be 10</small>)}
                                    
                        </div>
                        <div class="form-group">
                        <Input type="select"name="gender"
                                                        {...register("gender", { required: true })}
                                                    >
                                                        <option>Gender</option>
                                                        <option>Male</option>
                                                        <option>female</option>
                                                    </Input>
                                 {errors.address && (<small className="text-danger"> This field is required</small>)}
                                       
                        </div>
                        <div class="form-group">
                        <input id="user_name" type="number" className="form-control" placeholder="Age"
                                         {...register("age", { required: true })}
                                        />
                                        {errors.fullname && (<small className="text-danger"> This field is required</small>)}
                                        
                        </div>
                        <div class="form-group">
                        <input id="user_name" type="text" className="form-control" placeholder="Address"
                                         {...register("address", { required: true })}
                                        />
                                        {errors.fullname && (<small className="text-danger"> This field is required</small>)}
                                        
                        </div>

                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block btn-lg">Sign Up</button>
                        </div>
                        <p class="small text-center">By clicking the Sign Up button, you agree to our<a href="#">Terms &amp; Conditions</a>, and <a href="#">Privacy Policy</a></p>
                
                 </form>
                     
                     </div>
               </div>



                    {/* <section className="auth">
            <div className="back">
                <div className="container">
                    
                    <div className="row">
                   
                        <div className="col-md-8 col-md-offset-2">
                            <Form className="auth-form" id="personal-info" onSubmit={handleSubmit(onSubmit)} method="POST">
                               
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Full Name</label>
                                        <input id="user_name" type="text"
                                         {...register("fullname", { required: true })}
                                        />
                                        {errors.fullname && (<small className="text-danger"> This field is required</small>)}
                                        
                                    </div>
                                </div>
                                

                                <div className="row">
                                    <div className="col-md-12">
                                        <label >Email</label>
                                        <input id="user_email" type="email" 
                                         {...register("email", { required: true })}/>
                         {errors.email && (<small className="text-danger"> This field is required</small>)}
                                       
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Mobile Number</label>
                                        <input id="user_phone" type="number" 
                                         {...register("phone", { required: true,maxLength:10,minLength:10})} />
                                     {errors.phone && (<small className="text-danger">Length should be 10</small>)}
                                  
                                    </div>
                                </div>
                               
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Address</label>
                                        <input id="user_address" type="text" 
                                         {...register("address", { required: true })}/>
                                 {errors.address && (<small className="text-danger"> This field is required</small>)}
                                       
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Gender</label>
                                        <Input type="select"name="gender"
                                                        {...register("gender", { required: true })}
                                                    >
                                                        
                                                        <option>Male</option>
                                                        <option>female</option>
                                                    </Input>
                                 {errors.address && (<small className="text-danger"> This field is required</small>)}
                                       
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Age</label>
                                        <input id="user_age" type="number" 
                                         {...register("age", { required: true ,maxlength:2,minLength:2})}/>
                                 {errors.age && (<small className="text-danger"> This field is required</small>)}
                                    </div>
                                </div>


                                <button type="submit" className="btn btn-success  px-10"> Let's Get Started</button>
                            </Form>



                            <p></p>

                        </div>
                    </div>
                    </div>
                </div>
            </section> */}
        </>
                )
}

                export default Register
