import React, { usestate } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AboutUs } from './AboutUs';
import { NavBar } from './NavBar';
import { TextForm } from './TextForm';

export default function App() {
  return (
    <>
      <NavBar />
      <h2>Enter the text to analyze below </h2>
      <br></br>
      <TextForm />
      <AboutUs />
      <button type="button" className="btn btn-primary">
        Convert to Upper Case
      </button>
      <button type="button" className="btn btn-success m-2">
        Convert to Lower Case
      </button>
    </>
  );
}
