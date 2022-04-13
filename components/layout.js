import Footer from "./footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    //this is saying for all pages, give them the following layout:
    return ( 
        <div className="content">
            <Navbar/>
                {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;