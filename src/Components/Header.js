import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true);

    };
 
    useEffect(() => {
        document.title = ` ${show} tut`;
    }, [show]);

    return (
        <>
            <header>
                <div className="container"><h5 className="m-0">Logo and header</h5></div>
            </header>
        </>
    );
}

export default Header;
