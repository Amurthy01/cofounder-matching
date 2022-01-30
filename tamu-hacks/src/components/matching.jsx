import React from "react";
import styled from "@emotion/styled";
import People2 from "./people";
import Search from "./search.png";
import Grid from "./gridP.png";
import { NavLink } from "react-router-dom";

export default function Group11() {
  return (
    <RootWrapperGroup11>
      <People>People</People>
      <Image>
        <img src={Search} width="950" height="48px" />
      </Image>

      <Image2>
        <NavLink to="/cofounder">
          <img src={Grid} width="1100px" height="1050px" />
        </NavLink>
      </Image2>
    </RootWrapperGroup11>
  );
}

const RootWrapperGroup11 = styled.div`
  position: relative;
`;

const Image = styled.div`
  position: relative;
  top: 100px;
  left: 650px;
`;

const Image2 = styled.div`
  position: relative;
  top: 200px;
  left: 400px;
`;
const People = styled.span`
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
