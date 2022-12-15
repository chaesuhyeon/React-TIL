type Props = {
    title?: string; // 필수값으로 지정하고 싶지 않을 때 :앞에 ?를 넣어줌
    description: string; // ?가 없기 때문에 필수값
    company: string;
};

/**
 * @description 헤더 컴포넌트
 * @see [https://jsdoc.app/]
 */
function Header({ title, description, company }: Props) {
    // 구조 분해 할당
    /*     const obj = {
        aaa: 111,
        bbb: 222,
        ccc: 333,
    };

    const { aaa, bbb, ccc } = obj; */

    return (
        <>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h3>{company}</h3>
        </>
    );
}

export default Header;
