import styled from "styled-components";
import ImgItem from "../components/ImgItem";

const arr = [1, 2, 3];

function Body() {
    return (
        <BodyWrap>
            {arr.map((i, idx) => (
                <ImgWrap key={idx.toString()}>
                    <ImgItem
                        src={"/images/champs.jpg"}
                        location={"속초시, 한국"}
                        place={"속초 해수욕장"}
                        date={"2월 3일 ~ 8일"}
                        price={"11만 8천원"}
                    />
                    <ImgItem
                        src={"/images/tent.jpg"}
                        location={"중구, 한국"}
                        place={"38km 거리"}
                        date={"2월 25일 ~ 3월 2일"}
                        price={"11만 2천원"}
                    />
                    <ImgItem
                        src={"/images/snow.jpg"}
                        location={"Forde, 노르웨이"}
                        place={""}
                        date={"3월 13일 ~ 18일"}
                        price={"48만 8천원"}
                    />
                    <ImgItem
                        src={"/images/forest.jpg"}
                        location={"우붓, 인도네시아"}
                        place={""}
                        date={"10월 25일 ~ 31일"}
                        price={"11만 6천원"}
                    />
                    <ImgItem
                        src={"/images/grassland.jpg"}
                        location={"케이프타운, 남아프리카"}
                        place={"국립 공원"}
                        date={"4월 17일 ~ 22일"}
                        price={"17만 7천원"}
                    />
                    <ImgItem
                        src={"/images/champs.jpg"}
                        location={"속초시, 한국"}
                        place={"속초 해수욕장"}
                        date={"2월 3일 ~ 8일"}
                        price={"11만 8천원"}
                    />
                </ImgWrap>
            ))}
        </BodyWrap>
    );
}

export default Body;

const BodyWrap = styled.div`
    width: 100%;
    height: 100%;
`;
const ImgWrap = styled.div`
    display: flex;
    justify-content: space-around;
`;
