import React from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import { Outlet } from 'react-router';


/*
WIP
This page will use our backend server and API to render 2 widgets
*/


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


