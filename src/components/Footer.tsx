import React, { FunctionComponent } from "react";
import styled from "styled-components";

const PageFooter = styled.div`
  align-self: center;
  flex: 1 1 auto;
  position: fixed !important;
  bottom: 0;
  height: 40px;
  background-color: whitesmoke;
  margin: 0;
  width: 100%;
`;

const TextP = styled.p`
  margin: auto !important;
`;

export const Footer: FunctionComponent = () => {
  return (
    <>
      <PageFooter className="row">
        <TextP className="col-xs-12 text-center">
          Trident Pool & spa @2019 all rights reserved{" "}
        </TextP>
      </PageFooter>
    </>
  );
};
