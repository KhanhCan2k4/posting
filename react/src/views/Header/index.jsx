import 'bootstrap/dist/css/bootstrap.css';

function Header() {

    return (
        <>
            <header id='header' className='text-center py-3'>
                <div className="row">
                    <div className='col-3' >
                        Logo
                    </div>

                    <div className='col-6' >
                        Search
                    </div>

                    <div className='col-3' >
                        Actions
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;