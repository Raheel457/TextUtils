import React from "react";

function About(props) {
  return (
    <>
    <div className="container my-3" style={{color: props.mode ? "white": "black"}}>

      <h1>About Us</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque fugiat
        blanditiis dolorem earum! Tenetur culpa provident labore at itaque?
        Saepe recusandae voluptatem ducimus provident a voluptas enim quidem
        optio vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
        debitis ipsum culpa voluptate modi eius a soluta corrupti est minima,
        aliquid obcaecati reiciendis earum expedita vero voluptas eum tempore
        enim.
      </p>
    </div>
    </>
  );
}

export default About;
