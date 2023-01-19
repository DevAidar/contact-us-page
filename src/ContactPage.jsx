import image from "./assets/bg-image.jpg";
import { useState } from "react";

export default function Products() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    number: "",
    isAccepted: false,
  });

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
      console.log("not all");
    }
  }

  return (
    <div className="main-container">
      <span>
        <header>
          <h1>Contact Us</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="fName">First name</label>
            <input
              type="text"
              name="fName"
              id="fName"
              onChange={handleChange}
              value={formData.fName}
            />
          </p>

          <p>
            <label htmlFor="lName">Last name</label>
            <input
              type="text"
              name="lName"
              id="lName"
              onChange={handleChange}
              value={formData.lName}
            />
          </p>

          <p>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
            />
          </p>

          <p>
            <label htmlFor="number">Phone number</label>
            <input
              type="tel"
              name="number"
              id="number"
              onChange={handleChange}
              value={formData.number}
            />
          </p>

          <p className="agreement--section">
            <label htmlFor="agreement">
              I agree to the terms and conditions
            </label>
            <input
              type="checkbox"
              name="isAccepted"
              id="agreement"
              className="agreement--checkbox"
              onChange={handleChange}
              checked={formData.isAccepted}
            />
          </p>

          <input type="submit" className="btn" value="Submit"></input>
        </form>
      </span>
      <img src={image} alt="" />
    </div>
  );
}
