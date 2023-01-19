import image from "./assets/bg-image.jpg";
import { useState } from "react";

export default function Products() {
  return (
    <div className="main-container">
      <span>
        <header>
          <h1>Contact Us</h1>
        </header>
        <form>
          <p>
            <label htmlFor="fname">First name</label>
            <input type="text" name="fname" id="fname" />
          </p>

          <p>
            <label htmlFor="lname">Last name</label>
            <input type="text" name="lname" id="lname" />
          </p>

          <p>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </p>

          <p>
            <label htmlFor="number">Phone number</label>
            <input type="tel" name="number" id="number" />
          </p>

          <p className="agreement--section">
            <label htmlFor="agreement">
              I agree to the terms and conditions
            </label>
            <input
              type="checkbox"
              name="agreement"
              id="agreement"
              className="agreement--checkbox"
            />
          </p>

          <input type="submit" class="btn" value="Submit"></input>
        </form>
      </span>
      <img src={image} alt="" />
    </div>
  );
}
