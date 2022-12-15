type Props = {
    title: string;
    description: string;
    company: string;
};
/**
 * @description 푸터 컴포넌트
 * @see [https://jsdoc.app/]
 */
function Footer({ title, description, company }: Props) {
    return (
        <>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h3>{company}</h3>
        </>
    );
}

export default Footer;
