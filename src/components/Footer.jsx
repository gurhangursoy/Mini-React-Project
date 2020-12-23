import React from "react";
import emmet from "emmet";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container-fluid bg-dark text-light py-5">
        <div className="row text-center">
          <div className="col-sm-6 col-md-3">
            <h4>Contact</h4>
            <p>Gürhan Gürsoy</p>
            <p>Email : grhngrsoy@gmail.com</p>
            <a href="https://github.com/gurhangursoy">
              github.com/gurhangursoy
            </a>
          </div>
          <div className="col-sm-6 col-md-3">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
