import React from "react";
import { useParams } from "react-router-dom";

function Place() {
  const [place, setPlace] = useState({
    name: "",
    gallery: [],
  });
  const { id } = useParams;
  useEffect(() => {
    axios
      .get(`https://traveller.talrop.works/api/v1/places/${id}`)
      .then((response) => {
        setPlace(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Helmet>
        <title>{place.name}</title>
      </Helmet>
      <Header />
      <MainContainer>
        <Title>{place.name}</Title>
        <InfoContainer>
          <CatagoryName> {place.Catagory_name}</CatagoryName>
          <LoacationContainer>
            <LocationIcon
              src={require("../../assets/images/place.svg").default}
              alt=""
            />
            <LocationName>{place.location}</LocationName>
          </LoacationContainer>
        </InfoContainer>
        <GalleryContainer>
          <GalleryImageItem>
            <GalleryImage src={place.image} alt="" />
          </GalleryImageItem>
          {place.gallery.map((image) => (
            <GalleryImageItem>
              <GalleryImage src={image.image} alt="" />
            </GalleryImageItem>
          ))}
        </GalleryContainer>
        <SubHeading>Place Details</SubHeading>
        <Description>{place.description}</Description>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  width: 30%;
  margin: 70px auto 0;
`;
const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 15px;
`;
const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const CatagoryName = styled.span`
  padding: 5px 10px;
  border-radius: 20px;
  display: inline-block;
  border: 1px solid #9c9c9c;
  color: #9c9c9c;
  margin-right: 15px;
`;
const LoacationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LocationIcon = styled.img`
  margin-right: 5px;
`;
const LocationName = styled.span`
  color: #9c9c9c;
  font-size: 14px;
  font-weight: bold;
`;
const GalleryContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 15px;
  grid-gap: 20px;
  overflow: hidden;
  margin-bottom: 35px;
`;
const GalleryImageItem = styled.li`
  &:first-child {
    grid-column-end: span 2;
    grid-row-end: span 2;
  }
`;
const GalleryImage = styled.img`
  width: 100%;
  display: block;
`;
const SubHeading = styled.h3`
  font-size: 28px;
  margin-bottom: 20px;
`;
const Description = styled.p`
  font-size: 16px;
  line-height: 1.6em;
`;

export default Place;
