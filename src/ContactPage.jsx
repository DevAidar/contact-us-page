import image from "./assets/bg-image.jpg";

export default function Products() {
  return (
    <div className="main-container">
      <span>
        <form>
          <label htmlFor="fName"></label>
          <input type="text" name="fName" id="fName" />
          <label htmlFor="lName"></label>
          <input type="text" name="lName" id="lName" />
        </form>
      </span>
      <img src={image} alt="" />
    </div>
  );
}
