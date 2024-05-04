
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='h-[100vh]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;