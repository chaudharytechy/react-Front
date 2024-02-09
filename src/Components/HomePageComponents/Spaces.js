
import React from "react";
import styled from "styled-components";

function SpacesAvailable() {
  return (
    <Wrapper className="section">
    <div style={{boxShadow:"0px 0px 30px 0px #0000001a"}}>
    <div className="px-10 font-semibold text-xl xl:text-4xl lg:text-3xl pt-4 md:text-2xl" >Choose the Best For you</div>
      <div className="_6sknMP">
        
        <div className="_ksjMM _1fe2" title="Residential Projects">
          <p className="_9gncbH">Residential</p>
          <p className="_4rgjvNN">Projects</p>
        </div>
        
        <div className="_ksjMM _1fe4" title="Commercial Property">
          <p className="_9gncbH">Commercial</p>
          <p className="_4rgjvNN">Projects</p>
        </div>
      
        <div className="_ksjMM _1fe6" title="Sco Plots">
          <p className="_9gncbH">SCO</p>
          <p className="_4rgjvNN">Plots</p>
        </div>
      </div>
      </div>
      </Wrapper>
  );
}

export default SpacesAvailable;
const Wrapper=styled.section`
._6sknMP{
  display:flex;
  flex-wrap:wrap;
  padding:10px 15px;
  justify-content: space-around;
  
  border-radius:15px;
  margin-bottom:30px;
}
._1fe1,._1fe2,._1fe3,._1fe4,._1fe5,._1fe6{
  background-position: center;
  margin: 20px;
  cursor: pointer;
}
._1fe1:hover,._1fe2:hover,._1fe3:hover,._1fe4:hover,._1fe5:hover,._1fe6:hover{
  background-size:500px 250px;
}
._1fe1{
  background-image: linear-gradient(to right,rgb(255, 255, 255,0.1),rgb(255, 255, 255,0.1),rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url("../../OtherImages/residencial.jpeg");
  background-size:400px 180px;
}
._1fe2{
  background-image: linear-gradient(to right,rgb(255, 255, 255,0.1),rgb(255, 255, 255,0.1),rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url("../../OtherImages/residencialProject.jpeg");
  background-size:400px 180px;
}
._1fe3{
  background-image: linear-gradient(to right,rgb(255, 255, 255,0.1),rgb(255, 255, 255,0.1),rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url("../../OtherImages/coliving.jpeg");
  background-size:400px 180px;
}
._1fe4{
  background-image: linear-gradient(to right,rgb(255, 255, 255,0.1),rgb(255, 255, 255,0.1),rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url("../../OtherImages/commercialProperty.jpeg");
  background-size:400px 200px;
}
._1fe5{
  background-image: linear-gradient(to right,rgb(255, 255, 255,0.1),rgb(255, 255, 255,0.1),rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url("../../OtherImages/commecialProject.jpeg");
  background-size:400px 180px;
}
._1fe6{
  background-image: linear-gradient(to right,rgb(255, 255, 255,0.1),rgb(255, 255, 255,0.1),rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url("../../OtherImages/sco.jpeg");
  background-size:400px 180px;
}
._ksjMM{
  width: 380px;
  min-height: 150px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  box-sizing: border-box;
}
p,span{
  padding-right: 10%;
  font-size: x-large;
  line-height: normal;
  color:white;
}
._4rgjvNN{
  margin-top:0px;
  font-weight: 600;
}
._9gncbH{
  font-weight: 100;
}
._ksjMM:hover{
  transform:scale(1.05);
  transition: all .5s;
}
._ksjMM:not(:hover){
  transform:scale(1);
  transition: all .5s;
}
@media screen and (max-width:850px){
  ._ksjMM{
    width:320px;
  }
}
@media screen and (max-width:1300px) and (min-width:850px){
  ._ksjMM{
    width:360px;
  }
}
`