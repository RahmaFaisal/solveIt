import React from 'react'
import { Navbar } from 'react-bootstrap'
import Users from '../users/users'
import UserProfile from "../userProfile/userProfile";
import PostInfo from "../post/postInfo"
import './main.layout.css'

import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

function mainLayout(props) {

    return (
        <div>
            <div style={{ backgroundColor: '#3d3c3a', height: '25px', width: '100%', marginTop: '0' }}></div>
            <Navbar bg="light">
                <Navbar.Brand >
                    <img
                        alt=""
                        src="/solveit.png"
                        width="100%"
                        height="100%"
                        className="d-inline-block align-top"
                    />

                </Navbar.Brand>
            </Navbar>
            <div style={{ marginTop: '5%', marginBottom: '5%' }}>
                <BrowserRouter>
                    <Switch>
                        <Route  path="/users" component={Users} />
                        <Route  path="/userprofile" component={UserProfile} />
                        <Route  path="/postinfo" component={PostInfo} />
                    </Switch>
                </BrowserRouter>


            </div>
        </div>
    )
}

export default mainLayout;