import React, { Component } from "react";
import "./hero2.css";

interface Props {
  text: string;
  heading: string;
}

function Hero2({ text, heading }: Props) {
  return (
    <div className="heading">
      <h1>{heading}</h1>
      <p>{text}</p>
    </div>
  );
}

export default Hero2;
