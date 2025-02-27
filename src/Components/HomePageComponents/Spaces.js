import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function SpacesAvailable() {
  return (
    <Wrapper className="section">
      <div style={{ boxShadow: "0px 0px 30px 0px #0000001a" }}>
        <div className="flex items-center mx-6 lg:mx-6 xl:mx-14 md:mx-6">
          <h1 className="text-xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-left pt-4 ">
            Dream Property In The Heart of Gurugram
          </h1>
        </div>
        <div className="_6sknMP pb-0">
          <Link to={`/property/residential/`} target="_top">
            <div className="_ksjMM _1fe2" title="Residential Projects">
              <p className="_9gncbH">Residential</p>
              <p className="_4rgjvNN">Projects</p>
            </div>
          </Link>

          <Link to={`/projects/commerial/`} target="_top">
            <div className="_ksjMM _1fe4" title="Commercial Projects">
              <p className="_9gncbH">Commercial</p>
              <p className="_4rgjvNN">Projects</p>
            </div>
          </Link>

          <Link to={`/sco/plots/`} target="_top">
            <div className="_ksjMM _1fe6" title="Plots Sco">
              <p className="_9gncbH">Plots</p>
              <p className="_4rgjvNN">SCO</p>
            </div>
          </Link>

          <Link to={`/projects/independentfloors/`} target="_top">
            <div className="_ksjMM _1fe7" title="Builder & Independent Floor">
              <p className="_9gncbH">Builder & Independent</p>
              <p className="_4rgjvNN">Floor</p>
            </div>
          </Link>

          <Link to={`/plots-in-gurugram/`} target="_top">
            <div className="_ksjMM _1fe8" title="Deen Dayal Plots">
              <p className="_9gncbH">Plots In</p>
              <p className="_4rgjvNN">Gurugram</p>
            </div>
          </Link>

          <Link to={"/projects/villas/"} target="_top">
            <div className="_ksjMM _1fe9" title="Villa's">
              <p className="_9gncbH">Luxury</p>
              <p className="_4rgjvNN">Villas</p>
            </div>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default SpacesAvailable;
const Wrapper = styled.section`
  ._6sknMP {
    display: flex;
    flex-wrap: wrap;
    padding: 0px 25px;
    justify-content: space-around;
    border-radius: 15px;
    margin-bottom: 10px;
  }

  ._1fe1,
  ._1fe2,
  ._1fe3,
  ._1fe4,
  ._1fe5,
  ._1fe6,
  ._1fe7,
  ._1fe8,
  ._1fe9 {
    background-position: center;
    margin: 20px;
    cursor: pointer;
  }
  ._1fe1:hover,
  ._1fe2:hover,
  ._1fe3:hover,
  ._1fe4:hover,
  ._1fe5:hover,
  ._1fe6:hover,
  ._1fe7:hover,
  ._1fe8:hover,
  ._1fe9:hover {
    background-size: 500px 250px;
  }
  ._1fe1 {
    background-image: linear-gradient(
        to right,
        rgb(255, 255, 255, 0.1),
        rgb(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.7)
      ),
      url("../../OtherImages/residencial.webp");
    background-size: 400px 180px;
  }
  ._1fe2 {
    background-image: linear-gradient(
        to right,
        rgb(255, 255, 255, 0.1),
        rgb(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.7)
      ),
      url("../../OtherImages/residencialprojects.webp");
    background-size: 400px 180px;
  }
  ._1fe3 {
    background-image: linear-gradient(
        to right,
        rgb(255, 255, 255, 0.1),
        rgb(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.7)
      ),
      url("../../OtherImages/coliving.webp");
    background-size: 400px 180px;
  }
  ._1fe4 {
    background-image: linear-gradient(
        to right,
        rgb(255, 255, 255, 0.1),
        rgb(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.7)
      ),
      url("../../OtherImages/commercialproperty.webp");
    background-size: 400px 200px;
  }
  ._1fe5 {
    background-image: linear-gradient(
        to right,
        rgb(255, 255, 255, 0.1),
        rgb(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.7)
      ),
      url("../../OtherImages/commecialproject.webp");
    background-size: 400px 180px;
  }
  ._1fe6 {
    background-image: linear-gradient(
        to right,
        rgb(255, 255, 255, 0.1),
        rgb(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.7)
      ),
      url("../../OtherImages/sco.webp");
    background-size: 400px 180px;
  }

  ._1fe7 {
    background-image: linear-gradient(
        to right,
        rgb(255, 255, 255, 0.1),
        rgb(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.7)
      ),
      url("../../OtherImages/builderandindepedent.webp");
    background-size: 400px 180px;
  }

  ._1fe8 {
    background-image: linear-gradient(
        to right,
        rgb(255, 255, 255, 0.1),
        rgb(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.7)
      ),
      url("../../OtherImages/deendayal.webp");
    background-size: 400px 180px;
  }

  ._1fe9 {
    background-image: linear-gradient(
        to right,
        rgb(255, 255, 255, 0.1),
        rgb(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.7)
      ),
      url("../../OtherImages/villas.webp");
    background-size: 400px 180px;
  }
  ._ksjMM {
    width: 380px;
    min-height: 150px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    box-sizing: border-box;
    // height: 150px;
  }
  p,
  span {
    padding-right: 10%;
    font-size: x-large;
    line-height: normal;
    color: white;
  }
  ._4rgjvNN {
    margin-top: 0px;
    font-weight: 600;
  }
  ._9gncbH {
    font-weight: 100;
  }
  ._ksjMM:hover {
    transform: scale(1.05);
    transition: all 0.5s;
  }
  ._ksjMM:not(:hover) {
    transform: scale(1);
    transition: all 0.5s;
  }
  @media screen and (max-width: 850px) {
    ._ksjMM {
      width: 320px;
    }
  }
  @media screen and (max-width: 1300px) and (min-width: 850px) {
    ._ksjMM {
      width: 360px;
    }
  }
`;
