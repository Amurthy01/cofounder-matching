import React from "react";
import styled from "@emotion/styled";

export default function Gradient() {
  return (
    <RootWrapperGroup6>
      <Ellipse7></Ellipse7>
      <Vector xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="linear-gradient">
            <stop offset="0%" style="stop-color: rgba(152, 49, 255, 0.8)" />
            <stop offset="100%" style="stop-color: rgba(196, 196, 196, 0)" />
          </linearGradient>
        </defs>
        <path
          fill="url(#linear-gradient)"
          d="M 262.86309659633804 5.138331297711378 C 361.0973360636376 33.22590606038919 336.38691656532995 186.44603854407205 400.84834788070424 265.7198182457397 C 451.50185126278785 328.0128006969868 589.5243830976553 323.4647513362043 586.9648499755871 403.714251793624 C 584.3823726014207 484.68313635623986 458.0821117563355 485.8794780599092 392.3178459993608 533.1776331292677 C 345.6677189431289 566.7287548857648 320.2199722192105 633.3534330440016 262.86309659633804 636.8107180427988 C 204.05468355629773 640.3554969254615 156.3290662807131 593.4755066174833 116.80224852961359 549.7848021829885 C 79.65147190114544 508.7204369051979 65.89463759616655 457.31507136672434 51.981599737185924 403.714251793624 C 30.10141583376856 319.41952550801886 -26.341340333332866 232.19779295677074 14.38620259835981 155.22082500444904 C 61.43021618309089 66.30542627379549 166.14978897926517 -22.51437380168829 262.86309659633804 5.138331297711378 Z"
        ></path>
      </Vector>
      <Cofounder1
        src="grida://assets-reservation/images/9:73"
        alt="image of Cofounder1"
      ></Cofounder1>
      <Dot2
        src="grida://assets-reservation/images/9:124"
        alt="image of Dot2"
      ></Dot2>
    </RootWrapperGroup6>
  );
}

const RootWrapperGroup6 = styled.div`
  position: relative;
`;

const Ellipse7 = styled.div`
  width: 529px;
  height: 529px;
  background: linear-gradient(
    -90deg,
    rgba(152, 49, 255, 0.8),
    rgba(255, 25, 136, 0.76)
  );
  border-radius: 264px;
  position: absolute;
  left: 68px;
  top: 88px;
`;

const Vector = styled.svg`
  width: 587px;
  height: 637px;
  position: absolute;
  left: 19px;
  top: 82px;
`;

const Cofounder1 = styled.img`
  width: 616px;
  height: 617px;
  object-fit: cover;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Dot2 = styled.img`
  width: 98px;
  height: 121px;
  object-fit: cover;
  position: absolute;
  left: 118px;
  top: 547px;
`;
