import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../Header';
import Footer from '../../Footer';

function DefaultLayout({ children }) {


    return (
        <>
            <Header />
            <div className='container bg-white content'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default DefaultLayout;