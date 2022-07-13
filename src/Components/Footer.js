import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer className="container" >
      <div className='w-100 min-vh-100 d-flex align-content-around flex-wrap'>
        <div className="w-100">
          <h2 className="About-title">Let’s talk.</h2>
          <h3><a>biuro@craftmediahouse.pl</a></h3>
        </div>
        <div className="row w-100">
          <div className="col-6">
            <h4>Craft Event</h4>
            <h4>Ul. Kruszwicka 26/28, 53-652 Wrocław</h4>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <h4><a>Clients</a></h4>
                <h4><a>About</a></h4>
                <h4><a>Work</a></h4>
              </div>
              <div className="col-6">
                <h4><a>Fakebook</a></h4>
                <h4><a>Instagram</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
