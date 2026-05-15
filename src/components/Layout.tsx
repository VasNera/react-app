import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

interface LayoutProps {
    children:
         React.ReactNode;
    addClasses?: string;
}

const Layout = ({children} : LayoutProps) =>{
    return (
        <>
            <Header/>
            <main className="container mx-auto min-h-[95vh] pt-36">{children}</main>

            <Footer/>

        </>
    )
}

export default Layout;