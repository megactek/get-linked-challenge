import React from "react";

const RegisterSuccess = ({ setShowSuccess }) => {
  return (
    <div className="success__container">
      <div className="success__modal">
        <div className="image__box">
          <img src="assets/images/success-image.png" alt="" />
        </div>
        <h1>Congratulations </h1>
        <h1>you have successfully Registered!</h1>
        <div className="success__paragraph">
          <p>Yes, it was easy and you did it! check your mail box for next step</p>
          <span className="grin__icon"></span>
        </div>
        <button onClick={() => setShowSuccess(false)}>Back</button>
      </div>
    </div>
  );
};

export default RegisterSuccess;
