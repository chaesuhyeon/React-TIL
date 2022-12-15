import { Fragment } from "react";

function App() {
    const year = new Date().getFullYear();
    const isShow = true;
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <Fragment>
            {isShow && <h1>Hello World</h1>}
            <h1>REACT-STUDY {year}</h1>

            {list.map((item, index) => (
                <h3 key={index.toString()}>{item}</h3>
            ))}
        </Fragment>
    );
}

export default App;
