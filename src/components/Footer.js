import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container" id="footer">
        <div className="residence">
          <p className="h5">
            omareldagestany@outlook.com
            <br />
            New Paltz, NY, 12561
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47628.01210659309!2d-74.12058706595543!3d41.74746864135911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd1884bdee8f8d%3A0x82c17e4b65e32b6f!2sNew%20Paltz%2C%20NY%2012561!5e0!3m2!1sen!2sus!4v1692038712821!5m2!1sen!2sus"
            width="300"
            height="200"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>{" "}
        <div className="links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact Me</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Omar Khalil</h3>
          <h3 className="h3">Copyrights Reserved.</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
