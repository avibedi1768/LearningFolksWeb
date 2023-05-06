import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import SignUpLogo from "../../img/signup-image.png";
import InstaLogo from "../../img/instagram-logo.svg";
import LinkedinLogo from "../../img/linkedin-logo.svg";
import YoutubeLogo from "../../img/youtube-logo.svg";
import "../../components/user/css/SignUpStyles.css";
import { BsArrowRightShort } from "react-icons/bs";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Header from "../../components/user/jsx/Header";

const SignUp = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(true);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [checkboxCheck, setCheckboxCheck] = useState(false);

  const type = "register"

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    mobile: "",
    college: ""
  });

  const handleForm = (e) => {
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);
  }

  useEffect(() => {
    if( Object.keys(formErrors).length === 0 && isSubmit ){
      axios.post("http://localhost:5000/auth/signup", user)
      .then( res => {
        if(res.data.errors){
          setFormErrors(res.data.errors);
        }
       else if(res.data.message === "true"){
          navigate(`/emailverify/${type}`);
        }else {
          setFormErrors({final: res.data.message});
        }
      }).catch(err=>console.log(err));
    }
  }, [formErrors, isSubmit, navigate, user]);

  const validate = (values) => {
    const errors = {};
    const regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!values.name){
      errors.name = "Name required";
    }else if(values.name.length < 2){
      errors.name = "Minimum 2 characters required";
    }else if(values.name.length > 18){
      errors.name = "Maximum 18 characters required";
    }

    if(!values.email){
      errors.email = "Email required";
    }else if(!regex.test(values.email)){
      errors.email = "Incorrect Email Format";
    }

    if(!values.password){
      errors.password = "Password required";
    }else if(values.password.length < 6){
      errors.password = "Min 6 characters required";
    }else if(values.password.length > 12){
      errors.password = "Max 12 characters allowed";
    }

    if(!values.confirmpassword){
      errors.confirmpassword = "Confirm password required";
    }else if(values.confirmpassword !== values.password){
      errors.confirmpassword = "Confirm password didn't match password";
    }

    if(!values.mobile){
      errors.mobile = "Mobile number required"
    }else if(values.mobile.length !== 10){
      errors.mobile = "Mobile number is Invalid";
    }

    if(!values.college){
        errors.college = "College name required";
    }else if(values.college.length < 2){
        errors.college = "Minimum 2 characters required";
    }else if(values.college.length > 24){
        errors.name = "Maximum 24 characters required";
    }

    if(!checkboxCheck){
      errors.checkbox = "Accept Terms & Conditions to Continue";
    }

    return errors;
  }

  return (
    <div>
      <Header />

      <div className="main_signup">
        <div className="left-part_signup">
          <div className="top_signup">
            <h2>Find Your Dream Job !</h2>
            <p>Sign Up to become a part of our community</p>
          </div>

          <div className="signup-banner_signup">
            <img src={SignUpLogo} alt="Sign Up" />
          </div>

          <div className="social_signup">
            <div className="social-logo_signup">
              <a href="https://www.remove.bg/upload">
                <img src={InstaLogo} alt="Instagram" />
              </a>
            </div>
            <div className="social-logo_signup">
              <a href="https://www.remove.bg/upload">
                <img src={LinkedinLogo} alt="Linkedin" />
              </a>
            </div>
            <div className="social-logo_signup">
              <a href="https://www.remove.bg/upload">
                <img src={YoutubeLogo} alt="Youtube" />
              </a>
            </div>
          </div>
        </div>

        <div className="right-part_signup">
          <div className="form-container_signup">
            <div className="top_signup">
              <h2>Create Account</h2>
              <Link to="/login">Sign In</Link>
            </div>

            <div className="line_signup"></div>

            <div className="main-msg_signup">
              <p>{formErrors.final}</p>
            </div>

            <div className="mid-part_signup">
              <form onSubmit={submitForm}>
                <div className="form-main-box_signup">
                <div className="form-box_signup box1_signup">
                  <label>Name</label>
                  <input type="text" name="name" placeholder="Your Name" value={user.name} onChange={handleForm} />
                  <p className="errors-msg_signup">{formErrors.name}</p>
                </div>

                <div className="form-box_signup box2_signup">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="Your Email Address" value={user.email} onChange={handleForm} />
                  <p className="errors-msg_signup">{formErrors.email}</p>
                </div>

                <div className="form-box_signup box3_signup">
                  <label>Password</label>
                  <input type={showPassword ? "password" : "text"} name="password" placeholder="Enter Password" value={user.password} onChange={handleForm} />
                  {
                  showPassword ? (<AiOutlineEye title="Show password" className="hide_password_signup" onClick={()=>setShowPassword(!showPassword)} />) 
                  : 
                  (<AiOutlineEyeInvisible title="Hide password" className="hide_password_signup" onClick={()=>setShowPassword(!showPassword)} />)
                  }
                  <p className="errors-msg_signup">{formErrors.password}</p>
                </div>

                <div className="form-box_signup box4_signup">
                  <label>Confirm Password</label>
                  <input type="password" name="confirmpassword" placeholder="Confirm Password" value={user.confirmpassword} onChange={handleForm} />
                  <p className="errors-msg_signup">{formErrors.confirmpassword}</p>
                </div>

                <div className="form-box_signup box5_signup">
                  <label>Mobile Number</label>
                  <input type="text" name="mobile" placeholder="Your Mobile Number" value={user.mobile} onChange={handleForm} />
                  <p className="errors-msg_signup">{formErrors.mobile}</p>
                </div>

                <div className="form-box_signup box6_signup">
                  <label>College Name</label>
                  <input type="text" name="college" placeholder="Your College Name" value={user.college} onChange={handleForm} />
                  <p className="errors-msg_signup">{formErrors.college}</p>
                </div>

                <div className="box7_signup">
                  <div>
                  <input type="checkbox" id="cb1" onClick={() => setCheckboxCheck(!checkboxCheck)} />
                  <label for="cb1"></label>
                  <p><span>I agree to</span> <a href="youtube.com">Terms and Conditions</a></p>
                  </div>
                  <p className="errors-msg_signup">{formErrors.checkbox}</p>
                </div>
                </div>

                <button type="submit" onClick={submitForm} className="create-btn_signup">
                  Create New Account
                  <BsArrowRightShort size={27} className="create-btn-logo_signup" />
                </button> 
              </form>

              <div className="line_signup"></div>

              <div className="bottom-part_signup">
                <p>Have an account ? </p>
                <Link to="/login">&nbsp;Login Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
