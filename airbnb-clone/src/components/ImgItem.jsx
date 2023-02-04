import styled from "styled-components";

function ImgItem({ src, location, place, date, price }) {
    return (
        <ImgItemWrap>
            <Img src={src}>
                <HeartIcon>
                    <Icon
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        fill={"rgba(0, 0, 0, 0.5)"}
                        width={"24px"}
                        heigth={"24px"}
                        strokeW={2}
                    >
                        <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                    </Icon>
                </HeartIcon>
            </Img>
            <Dsc size={"15px"} weight={"bold"} color={"black"}>
                <Dsc>{location}</Dsc>
                <Dsc>
                    <Icon
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        width={"12px"}
                        heigth={"12px"}
                        fill={"currentcolor"}
                    >
                        <path
                            d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                            fill-rule="evenodd"
                        ></path>
                    </Icon>
                    4.75
                </Dsc>
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
    gap: 25px;
    margin-right: 10px;
    cursor: pointer;
`;

const Img = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 305px;
    height: 290px;
    border-radius: 25px;
    background-image: url(${(props) => props.src});
    background-size: cover;
`;
const HeartIcon = styled.div`
    margin: 10px 5px;
    width: 32px;
    height: 32px;
`;

const Dsc = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: ${(props) => props.size};
    font-weight: ${(props) => props.weight};
    color: ${(props) => props.color}; ;
`;

const Icon = styled.svg`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: block;
    color: ${(props) => props.color};
    fill: ${(props) => props.fill};
    stroke: white;
    stroke-width: ${(props) => props.strokeW};
    overflow: visible;
`;
