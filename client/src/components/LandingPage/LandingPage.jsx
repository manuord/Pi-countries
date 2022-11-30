import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="divContainer">
      <h1 className="title">Welcome to my Countries app!</h1>
      <div className="btnContainer">
        <Link exact to="/Home">
          <button className="btn">Enter</button>
        </Link>
      </div>
    </div>
  );
}
