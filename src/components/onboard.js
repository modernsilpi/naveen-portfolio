import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./web.css";
import { useHistory, Link } from 'react-router-dom'
import onBoard1 from './images/2d-art-board/on-board-screens/on board screens-page-001.jpg';
import onBoard2 from './images/2d-art-board/on-board-screens/on board screens-page-002.jpg';
import onBoard3 from './images/2d-art-board/on-board-screens/on board screens-page-003.jpg';
import onBoard4 from './images/2d-art-board/on-board-screens/on board screens-page-004.jpg';

import { IoIosArrowBack } from 'react-icons/io'

function Onboard() {
const lettud = () => {
    window.open("http://lettude.com",'_blank');
}

const ms = () => {
    window.open("https://modernsilpi.com","_blank");
}

const dslr = () => {
    window.open("https://dslr4rent.com","_blank");
}

const spot = () => {
    // window.open("");
}

const history = useHistory()

    return (
        <div className="webdiv">
            <div className="backBtn" onClick={ history.goBack}>
<IoIosArrowBack className="backIcon"/>
            </div>
            <h1>Onboard</h1>
            <section className="cardHolder">
            <Row xs={12} md={12} lg={12} className="row">
            {/* <Col className="col">
                <Link className="Link" to="/"><div className="Displaycard">
                  <img src={ photoshop } alt="2D Story Board" />
                  <h2>2D Story Board</h2>
                </div></Link>
                </Col> */}
               
            <Col className="col">
               <a onClick={spot}><div className="Displaycard1">
                  <img src={ onBoard1 } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                <Col className="col">
               <a onClick={spot}><div className="Displaycard1">
                  <img src={ onBoard2 } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                <Col className="col">
               <a onClick={spot}><div className="Displaycard1">
                  <img src={ onBoard3 } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                <Col className="col">
               <a onClick={spot}><div className="Displaycard1">
                  <img src={ onBoard4 } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                
               {/* <Col className="col">
               <a onClick={ms}><div className="Displaycard1">
                  <img src={ modernsilpi } alt="modern silpi" />
                  <h2>Modern Silpi</h2>
                  <p><b>Technologies:</b> Bootstrap, Html, Css, Js, jQuery</p>
                </div></a>
                </Col>
                <Col className="col">
                <a onClick={dslr}> <div className="Displaycard">
                  <img src={ cameraRentals } alt="dsrl4rents" />
                  <h2>dslr4rent</h2>
                  <p><b>Technologies:</b> Javascript, Html, Css, jQuery, Firebase, Bootstrap</p>
                </div></a>
                </Col>
                <Col className="col">
                <a onClick={lettud}><div className="Displaycard">
                  <img src={ lettude } alt="lettude" />
                  <h2>Lettude</h2>
                  <p><b>Technologies:</b> Html, Css, Bootstrap, Js, jQuery, Node.js, Mongodb</p>
                </div></a>
                </Col> */}
            </Row>
        </section>
        </div>
    )
}

export default Onboard
