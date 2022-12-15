type Props = {
    title: string;
    description: string;
    company: string;
};
/**
 * @description 콘텐츠 컴포넌트
 * @see [https://jsdoc.app/]
 */
function Content({ title, description, company }: Props) {
    return (
        <>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h3>{company}</h3>
        </>
    );
}

export default Content;
