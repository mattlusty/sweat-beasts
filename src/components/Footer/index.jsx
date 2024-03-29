import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const cardioImages = [
  "/images/cardio/bike.webp",
  "/images/cardio/dumbell-f.jpeg",
  "/images/cardio/push.webp",
  "/images/cardio/pushup-f.webp ",
  "/images/cardio/ropes.jpeg ",
  "/images/cardio/run.jpeg ",
  "/images/cardio/situp-f.webp ",
  "/images/cardio/swim.jpeg ",
  "/images/cardio/tread-f.jpeg ",
  "/images/cardio/tread-f2.webp",
];

function Footer({ updateWorkouts }) {
  return (
    <section className="section-7" id="contactt">
      <div className="container text-center footer-container">
        <div className="container text-center">
          <span className="nav_item_footer">
            <Link className="item_footer" to="/" aria-label="Contact">
              Home
            </Link>
          </span>
          <span className="extraDecoration">-</span>

          <span className="nav_item_footer">
            <Link className="item_footer" to="/weights" aria-label="Contact">
              Weights
            </Link>
          </span>
          <span className="extraDecoration">-</span>

          <span className="nav_item_footer">
            <Link
              className="item_footer"
              onClick={() => updateWorkouts({ type: "cardio" }, cardioImages)}
              aria-label="Contact"
            >
              Cardio
            </Link>
          </span>
          <span className="nav_item_footer">
            <Link className="item_footer" to="/contact" aria-label="Contact">
              Contact
            </Link>
          </span>
        </div>

        <div className="mb-1 mt-4" id="copyRights">
          <span>&copy; 2024 fitTECH All rights Reserved</span>
        </div>

        <div className="mb-1 mt-3" id="footer-socials">
          <a href="">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="">
            <i className="fab fa-github"></i>
          </a>
          <a href="">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <div>
          <p className="extraDecoration">...</p>
        </div>
      </div>
    </section>
  );
}
export default Footer;
