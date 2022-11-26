import React, { usestate } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() 
{
  const [text, upperCase] = usestate('Enter Text here');
  upperCase('ABCD');

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h2>Enter the text to analyze below </h2>
      <br></br>
      <div>
        <textarea className="form-control" value={text} rows="8"></textarea>
      </div>
      <button type="button" className="btn btn-primary">
        Convert to Upper Case
      </button>
      <button type="button" className="btn btn-success m-2">
        Convert to Lower Case
      </button>
    </>
  );
}
