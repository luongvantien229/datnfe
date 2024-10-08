import { Link } from "react-router-dom";

export default function ContactArea() {
  return (
    <div className="contact-area bg-gray-2">
      <div className="custom-container">
        <div className="row">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="col-xl-3 col-lg-6 col-md-6 col-12 col-sm-6">
              <div className="single-contact-wrap text-center wow tmFadeInUp">
                <h4>Vị trí cửa hàng</h4>
                <p>Công viên phần mềm </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
