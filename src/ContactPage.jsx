import image from "./assets/bg-image.jpg";
import { useEffect, useState } from "react";

export default function Products() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    number: "",
    isAccepted: false,
  });

  const errorText = "Please fill in";

  const [submitClicked, setSubmitClicked] = useState(false);

  function handleChange(e) {
    setFormData((prev) => {
      const { name, checked, type, value } = e.target;

      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(Object.values(formData));
    if (Object.values(formData).every((item) => item)) {
      console.log(formData);
    } else {
      setSubmitClicked(true);
    }
  }

  return (
    <div className="main--container">
      <header>
        <h1>Contact Us</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="fName--section">
          <label htmlFor="fName">First name</label>
          <input
            type="text"
            name="fName"
            placeholder="John"
            onChange={handleChange}
            value={formData.fName}
            className={submitClicked && !formData.fName ? "highlight" : ""}
          />
          {submitClicked && !formData.fName && <p>{errorText}</p>}
        </div>

        <div className="lName--section">
          <label htmlFor="lName">Last name</label>
          <input
            type="text"
            name="lName"
            placeholder="Doe"
            onChange={handleChange}
            value={formData.lName}
            className={submitClicked && !formData.lName ? "highlight" : ""}
          />
          {submitClicked && !formData.lName && <p>{errorText}</p>}
        </div>

        <div className="email--section">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            onChange={handleChange}
            value={formData.email}
            className={submitClicked && !formData.email ? "highlight" : ""}
          />
          {submitClicked && !formData.email && <p>{errorText}</p>}
        </div>

        <div className="number--section">
          <label htmlFor="number">Phone number</label>
          <input
            type="number"
            name="number"
            placeholder="901-282-3639"
            onChange={handleChange}
            value={formData.number}
            className={submitClicked && !formData.number ? "highlight" : ""}
          />
          {submitClicked && !formData.number && <p>{errorText}</p>}
        </div>

        <div className="agreement--section">
          <label htmlFor="agreement">I agree to the terms and conditions</label>
          <input
            type="checkbox"
            name="isAccepted"
            className={submitClicked && !formData.isAccepted ? "highlight" : ""}
            onChange={handleChange}
            checked={formData.isAccepted}
          />
        </div>
        <div className="button--container">
          <button>Submit</button>
        </div>
      </form>

      <img src={image} alt="image of mountains" />
    </div>
  );
}
