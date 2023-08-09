
import React from "react";
import PropTypes from "prop-types";
import { Div } from "./Section.styled";

function Section({ title, children }) {
  return (
    <Div>
      <h2>{title}</h2>
      {children}
    </Div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
