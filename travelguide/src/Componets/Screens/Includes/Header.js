import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <>
      <HeaderContainer>
        <LogoImage src={require("../../../assets/images/logo.svg").default} />

        <RightBox>
          <Button>Login</Button>
        </RightBox>
      </HeaderContainer>
    </>
  );
}
const HeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoImage = styled.img`
  width: 150px;
  display: block;
`;
const RightBox = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  background-color: #046bf7;
  border-radius: 4px;
  padding: 13px 45px;
  border: none;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
export default Header;
