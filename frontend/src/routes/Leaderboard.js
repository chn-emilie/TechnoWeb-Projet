import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


import { Outlet } from 'react-router';

import { useNavigate } from 'react-router-dom';



export default function Home() {
    
    return(
    <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <Image className="homeImg"src="./assets/logo_big.png"/><br/>
            <p className="lead">finest players</p>

            <Row >
               <h1 className="wip" >WORK IN PROGRESS...</h1>
            </Row>

        
        <Outlet />
    </div>
    );
}


