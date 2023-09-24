import React, { useState } from "react";
import { NavBar } from "../../components";
import "./register.css";
import RegisterSuccess from "./RegisterSuccess";

const Register = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  function closeModal(e) {
    e.preventDefault();
    setShowSuccess(!showSuccess);
  }
  return (
    <div className="contact">
      <NavBar />
      <section className="register__main">
        <div className="register__container">
          <div className="register__left">
            <img src="assets/images/register-image.png" alt="" />
          </div>
          <div className="register__right">
            <h1 className="primary-text">Register</h1>
            <div className="couples__container">
              <p>Be part of this movement!</p>
              <span className="couples__icon"></span>
            </div>
            <h2>CREATE YOUR ACCOUNT</h2>
            <form>
              <div className="form__group">
                <div className="input__field">
                  <input type="text" name="team__name" placeholder="Enter the name of your group" />
                  <label htmlFor="team__name">Team's Name</label>
                </div>
                <div className="input__field">
                  <input type="text" name="team__phone" placeholder="Enter your phone number" />
                  <label htmlFor="team__phone">Phone</label>
                </div>
              </div>
              <div className="form__group">
                <div className="input__field">
                  <input type="text" name="team__email" placeholder="Enter your email address" />
                  <label htmlFor="team__email">Email</label>
                </div>
                <div className="input__field">
                  <input type="text" name="project__topic" placeholder="What is your group project topic" />
                  <label htmlFor="project__topic">Project Topic</label>
                </div>
              </div>
              <div className="form__group">
                <div className="input__field">
                  <select name="group__size">
                    <option value="1" selected>
                      Select your category
                    </option>
                    <option value="2">category 1</option>
                  </select>
                  <label htmlFor="team__category">Category</label>
                </div>
                <div className="input__field">
                  <select name="group__size">
                    <option value="1" selected>
                      Select
                    </option>
                    <option value="2">Option 2</option>
                  </select>
                  <label htmlFor="group__size">Group Size</label>
                </div>
              </div>
              <p>Please review your registration details before submitting</p>
              <div className="form__check">
                <label className="check__label">
                  <input type="checkbox" name="check" />I agreed with the event terms and conditions and privacy policy
                </label>
              </div>
              <button onClick={(e) => closeModal(e)}>Register Now</button>
            </form>
          </div>
        </div>
        {showSuccess && <RegisterSuccess setShowSuccess={setShowSuccess} />}
      </section>
    </div>
  );
};

export default Register;
