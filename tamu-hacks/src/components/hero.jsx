import React from "react";
import styled from "@emotion/styled";
import Logo from "./hero-image.png";

export default function Hero() {
  return (
    <RootWrapperComponent2>
      <Header1>
        Have a startup idea in mind?
        <br />
        Find your future Co-Founder.
      </Header1>
      <Header2>
        It can be hard to find the perfect co-founder to work with. <br />
        We make the process easy through intuitive AI pairing using similar
        interests, passions and skills.
      </Header2>
      <Rectangle3 xmlns="http://www.w3.org/2000/svg">
        <path
          fill="rgba(46, 46, 46, 1)"
          d="M 0 0 L 213.00001525878906 0 L 213.00001525878906 57 L 0 57 L 0 0 Z"
        ></path>
      </Rectangle3>
      <Rectangle4 xmlns="http://www.w3.org/2000/svg">
        <path
          fill="transparent"
          d="M 0 0 L 173 0 L 173 28.5 L 173 57 L 0 57 L 0 0 Z"
        ></path>
      </Rectangle4>
      <GetStartedNow>Get Started Now 🚀</GetStartedNow>
      <LearnMore>Learn More ️⚡️</LearnMore>
      <Image>
        <img src={Logo} width="750px" height="850px" />
      </Image>
    </RootWrapperComponent2>
  );
}

const RootWrapperComponent2 = styled.div`
  position: relative;
`;

const Image = styled.div`
  position: relative;
  top: 60px;
  left: 1000px;
`;

const Header1 = styled.span`
  color: rgba(46, 46, 46, 1);
  text-overflow: ellipsis;
  font-size: 45px;
  font-family: Inter, sans-serif;
  font-weight: 800;
  line-height: 153%;
  text-align: left;
  min-height: 126px;
  width: 678px;
  position: absolute;
  left: 100px;
  top: 200px;
  height: 126px;
`;

const Header2 = styled.span`
  color: rgba(149, 149, 149, 1);
  text-overflow: ellipsis;
  font-size: 22px;
  font-weight: normal;
  line-height: 160%;
  text-align: left;
  min-height: 110px;
  width: 627px;
  position: absolute;
  left: 100px;
  top: 400px;
  height: 110px;
`;
const Rectangle3 = styled.svg`
  width: 213px;
  display: flex;
  height: 57px;
  position: absolute;
  left: 100px;
  top: 550px;
  border-radius: 10px;
`;

const Rectangle4 = styled.svg`
  width: 173px;
  height: 57px;
  position: absolute;
  left: 355px;
  top: 550px;
  border-radius: 10px;
  border: solid 3px rgb(0, 0, 0);
`;
const GetStartedNow = styled.span`
  color: rgba(255, 255, 255, 1);
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: center;
  min-height: 23px;
  width: 187px;
  position: absolute;
  left: 110px;
  top: 563px;
  height: 23px;
`;
const LearnMore = styled.span`
  color: rgba(46, 46, 46, 1);
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: center;
  min-height: 23px;
  width: 188px;
  position: absolute;
  left: 350px;
  top: 563px;
  height: 23px;
`;
