import React from "react";
import { useState, useEffect } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
function Places() {
  const [Places, setPlaces] = useState([]);
  useEffect(() => {
    axios
      .get("https://traveller.talrop.works/api/v1/places/")
      .then((response) => {
        setPlaces(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const renderPlaces = () => {
    return Places.map((place) => (
      <PlaceCard>
        <PlaceCardLink>
          <PlaceImage src={place.image} alt="" />
          <PlaceBottomContainer>
            <PlaceTitle>{place.name} </PlaceTitle>
            <PlaceLocation>
              <LocationIcon
                src={require("../../assets/images/place.svg").default}
                alt="image"
              />
              <LocationName>{place.location}</LocationName>
            </PlaceLocation>
          </PlaceBottomContainer>
        </PlaceCardLink>
      </PlaceCard>
    ));
    // console.log(renderPlaces);
  };
  return (
    <>
      <Helmet>
        <title>Places|Travel</title>
      </Helmet>
      <TopContainer>
        <Heading>Welcome Sayooj</Heading>
        <Paragraph>Explore the world around you</Paragraph>
      </TopContainer>
      <PlacesContainer>{renderPlaces()}</PlacesContainer>
    </>
  );
}
const TopContainer = styled.div`
  width: 90%;
  margin: 100px auto 0;
`;
const Heading = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;
const Paragraph = styled.p`
  font-size: 25px;
  color: #dfdfe2;
`;
const PlacesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 50px auto 0;
`;
const PlaceCard = styled.li`
  width: 23.5%;
  margin-right: 2%;
  margin-bottom: 25px;
  &:nth-child(4n) {
    margin-right: 0;
  }
`;
const PlaceCardLink = styled(Link)`
  display: block;
  appearance: none;
`;
const PlaceImage = styled.img`
  width: 100%;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const PlaceBottomContainer = styled.div`
  padding: 10px 15px;
`;
const PlaceTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
`;
const PlaceLocation = styled.div`
  display: flex;
`;
const LocationIcon = styled.img`
  margin-right: 10px;
`;
const LocationName = styled.span`
  font-size: 18px;
`;
export default Places;
