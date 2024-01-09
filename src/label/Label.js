import React from "react";
import styled from "styled-components";

const LabelStyles = styled.label`
  color: ${(props) => props.theme.grayDark};
  font-weight: 600;
  cursor: pointer;
`;
const Label = ({ htmlFor = "", children, ...props }) => {
  return (
    <div>
      <LabelStyles htmlFor={htmlFor} {...props}>
        {children}
      </LabelStyles>
    </div>
  );
};

export default Label;
