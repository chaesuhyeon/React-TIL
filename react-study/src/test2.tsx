import Header from "@/components/layout/Header";
import Content from "@/components/layout/Content";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";

function App() {
    return (
        <>
            <Header title="Header" description="헤더" company="sweetk" />
            <Sidebar title="Sidebar" description="사이드바" company="sweetk" />
            <Content title="Content" description="내용" company="sweetk" />
            <Footer title="Footer" description="푸터" company="sweetk" />
        </>
    );
}

export default App;
