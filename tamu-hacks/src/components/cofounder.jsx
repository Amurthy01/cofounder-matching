import React from "react";
import styled from "@emotion/styled";
import Right from "./cofounder-right";
import High from "./high2.png";
import Mike from "./mike.png";
import Buttons from "./buttons.png";

export default function Group13() {
  return (
    <RootWrapperGroup13>
      <Bio>Bio</Bio>
      <Skills>Skills</Skills>
      <Interests>Interests</Interests>
      <Text1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
        aliquam urna ultricies eu eleifend ac at. Nisi, amet nisi venenatis
        pulvinar aenean nec mauris. Dolor tortor aliquam, pulvinar tristique
        vitae. Non velit a nibh convallis sed accumsan tellus dictumst integer.
      </Text1>
      <Text2>
        Blockchain, AI, Machine Learning, FinTech, Dao, SaaS, Analytic Software
      </Text2>
      <Align>
        <Rectangle8></Rectangle8>
        <Rectangle9></Rectangle9>
        <Rectangle10></Rectangle10>
        <Rectangle11></Rectangle11>
        <AdobeXd>Adobe XD 🎨</AdobeXd>
        <ReactJs>React JS ‍💻</ReactJs>
        <Javascript>Javascript ⚡️</Javascript>
        <NodeJs>Node.JS 🌎</NodeJs>
      </Align>
      <Button>
        <img src={Buttons} width="400px" height="100px" />
      </Button>
      <Image>
        <img src={High} width="450" height="700px" />
      </Image>
      <Image2>
        <img src={Mike} width="420" height="190px" />
      </Image2>
    </RootWrapperGroup13>
  );
}

const RootWrapperGroup13 = styled.div`
  position: relative;
  top: 300px;
  left: 200px;
`;

const Image = styled.div`
  position: relative;
  top: 5px;
  left: 1000px;
`;

const Button = styled.div`
  position: relative;
  bottom: 150px;
  left: 1000px;
`;

const Align = styled.div`
  position: relative;
  top: 50px;
`;

const Image2 = styled.div`
  position: relative;
  padding-bottom: 30px;
  bottom: 980px;
`;

const Bio = styled.span`
  color: rgba(0, 0, 0, 1);
  text-overflow: ellipsis;
  font-size: 30px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: center;
  position: absolute;
  left: 0px;
  top: 40px;
`;

const Skills = styled.span`
  color: rgba(0, 0, 0, 1);
  text-overflow: ellipsis;
  font-size: 30px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: center;
  position: absolute;
  left: 0px;
  top: 280px;
`;

const Interests = styled.span`
  color: rgba(0, 0, 0, 1);
  text-overflow: ellipsis;
  font-size: 30px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: center;
  position: absolute;
  left: 0px;
  top: 420px;
`;

const Text1 = styled.span`
  color: rgba(149, 149, 149, 1);
  text-overflow: ellipsis;
  font-size: 20px;
  font-family: Quicksand, sans-serif;
  font-weight: 500;
  line-height: 163%;
  text-align: left;
  min-height: 174px;
  width: 695px;
  position: absolute;
  left: 0px;
  top: 110px;
  height: 174px;
`;

const Text2 = styled.span`
  color: rgba(149, 149, 149, 1);
  text-overflow: ellipsis;
  font-size: 20px;
  font-family: Quicksand, sans-serif;
  font-weight: 500;
  line-height: 163%;
  text-align: left;
  min-height: 47px;
  width: 695px;
  position: absolute;
  left: 0px;
  top: 480px;
  height: 47px;
`;

const Rectangle8 = styled.div`
  width: 154px;
  height: 34px;
  background-color: rgba(229, 229, 229, 0.3);
  border-radius: 30px;
  position: absolute;
  left: 0px;
  top: 296px;
`;

const Rectangle9 = styled.div`
  width: 134px;
  height: 34px;
  background-color: rgba(229, 229, 229, 0.3);
  border-radius: 30px;
  position: absolute;
  left: 177px;
  top: 296px;
`;

const Rectangle10 = styled.div`
  width: 134px;
  height: 34px;
  background-color: rgba(229, 229, 229, 0.3);
  border-radius: 30px;
  position: absolute;
  left: 334px;
  top: 296px;
`;

const Rectangle11 = styled.div`
  width: 134px;
  height: 34px;
  background-color: rgba(229, 229, 229, 0.3);
  border-radius: 30px;
  position: absolute;
  left: 491px;
  top: 296px;
`;

const AdobeXd = styled.span`
  color: rgba(0, 0, 0, 1);
  text-overflow: ellipsis;
  font-size: 15px;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  line-height: 163%;
  text-align: left;
  position: absolute;
  left: 31px;
  top: 301px;
`;

const ReactJs = styled.span`
  color: rgba(0, 0, 0, 1);
  text-overflow: ellipsis;
  font-size: 15px;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  line-height: 163%;
  text-align: left;
  position: absolute;
  left: 202px;
  top: 301px;
`;

const Javascript = styled.span`
  color: rgba(0, 0, 0, 1);
  text-overflow: ellipsis;
  font-size: 15px;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  line-height: 163%;
  text-align: left;
  position: absolute;
  left: 353px;
  top: 301px;
`;

const NodeJs = styled.span`
  color: rgba(0, 0, 0, 1);
  text-overflow: ellipsis;
  font-size: 15px;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  line-height: 163%;
  text-align: left;
  position: absolute;
  left: 518px;
  top: 301px;
`;
