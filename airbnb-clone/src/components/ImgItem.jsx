import styled from "styled-components";

function ImgItem({ src, location, place, date, price }) {
  return (
    <ImgItemWrap>
      <Img src={src} />
      <Dsc size={"15px"} weight={"bold"} color={"black"}>
        {location}
      </Dsc>
      <Dsc size={"15px"} color={"gray"}>
        {place}
      </Dsc>
      <Dsc size={"15px"} color={"gray"}>
        {date}
      </Dsc>
      <Dsc size={"15px"} weight={"bold"} color={"black"}>
        {price}/박
      </Dsc>
    </ImgItemWrap>
  );
}

export default ImgItem;

const ImgItemWrap = styled.div`
  width: 305px;
  height: 390px;
  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 305px;
  height: 290px;
  border-radius: 25px;
  background: green;
`;

const Dsc = styled.div`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color}; ;
`;
