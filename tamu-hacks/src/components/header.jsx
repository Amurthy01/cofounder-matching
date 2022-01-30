import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <RootWrapperGroup5>
      <SearchSearchBar>
        <TopBarBg></TopBarBg>
      </SearchSearchBar>
      <NavLink to="/">
        <CoFounderMatch>CoFounder Match</CoFounderMatch>
      </NavLink>
      <Rectangle1 xmlns="http://www.w3.org/2000/svg">
        <path
          fill="rgba(46, 46, 46, 1)"
          d="M 0 0 L 139.21568298339844 0 L 139.21568298339844 44.54901885986328 L 0 44.54901885986328 L 0 0 Z"
        ></path>
      </Rectangle1>
      <Rectangle2 xmlns="http://www.w3.org/2000/svg">
        <path
          fill="transparent"
          d="M 0 0 L 129.00653076171875 0 L 129.00653076171875 44.54901885986328 L 0 44.54901885986328 L 0 0 Z"
        ></path>
      </Rectangle2>
      <button>
        <LogIn>Log In</LogIn>
      </button>
      <button>
        <NavLink to="/profile">
          <SignUp>Sign Up</SignUp>
        </NavLink>
      </button>
    </RootWrapperGroup5>
  );
}

const RootWrapperGroup5 = styled.div`
  position: relative;
`;

const SearchSearchBar = styled.div`
  width: 1440px;
  height: 90px;
  border: solid 1px rgba(229, 229, 229, 1);
  position: absolute;
  left: 0px;
  top: 0px;
`;

const TopBarBg = styled.div`
  width: 1440px;
  height: 90px;
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  left: 0px;
  top: 0px;
`;

const CoFounderMatch = styled.span`
  color: rgba(46, 46, 46, 1);
  text-overflow: ellipsis;
  font-size: 25px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: left;
  min-height: 26px;
  width: 236px;
  position: absolute;
  left: 106px;
  top: 32px;
  height: 26px;
`;

const Rectangle1 = styled.svg`
  width: 139px;
  height: 45px;
  border-radius: 10px;
  position: relative;
  left: 1700px;
  top: 21px;
`;

const Rectangle2 = styled.svg`
  width: 120px;
  height: 45px;
  position: relative;
  left: 1430px;
  top: 21px;
  border-radius: 10px;
  border: solid 3px rgb(0, 0, 0);
`;

const LogIn = styled.span`
  color: rgba(46, 46, 46, 1);
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: center;
  min-height: 20px;
  width: 60px;
  position: absolute;
  left: 1600px;
  top: 33px;
  height: 20px;
`;

const SignUp = styled.span`
  color: rgba(255, 255, 255, 1);
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: center;
  min-height: 20px;
  width: 77px;
  position: absolute;
  left: 1730px;
  top: 33px;
  height: 20px;
`;
