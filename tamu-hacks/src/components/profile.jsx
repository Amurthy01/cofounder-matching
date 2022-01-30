import React from "react";
import styled from "@emotion/styled";
import Form1 from "./form1";
import Form2 from "./form2";

export default function Group7() {
  return (
    <RootWrapperGroup7>
      <CreateProfile>Create Profile</CreateProfile>
      <SubHead>Enter your information to get started.</SubHead>
      <Form1></Form1>
      <Form2></Form2>
    </RootWrapperGroup7>
  );
}

const RootWrapperGroup7 = styled.div`
  position: relative;
`;

const CreateProfile = styled.span`
  color: rgba(46, 46, 46, 1);
  text-overflow: ellipsis;
  font-size: 35px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: left;
  position: absolute;
  left: 200px;
  top: 100px;
`;

const SubHead = styled.span`
  color: rgba(255, 25, 136, 1);
  text-overflow: ellipsis;
  font-size: 25px;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  text-align: left;
  position: absolute;
  left: 200px;
  top: 170px;
`;
