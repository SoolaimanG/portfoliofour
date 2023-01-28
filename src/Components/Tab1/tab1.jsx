import image1 from "../../Images/project-img1.png";
import image2 from "../../Images/project-img2.png";
import image3 from "../../Images/project-img3.png";
import "./tab1.css";

function Tab1() {
  return (
    <article className="tab1__one">
      <div>
        <img src={image1} alt="" />
      </div>
      <div>
        <img src={image2} alt="" />
      </div>
      <div>
        <img src={image3} alt="" />
      </div>
      <div>
        <img src={image1} alt="" />
      </div>
      <div>
        <img src={image2} alt="" />
      </div>
      <div>
        <img src={image3} alt="" />
      </div>
    </article>
  );
}

export default Tab1;
