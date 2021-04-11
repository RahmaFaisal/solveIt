import React, { Component } from 'react'
import { userController } from "../../controllers/userController";
import mapUsers from "../../models/user"
import './users.style.css'

import DataPagination from '../dataPagination/dataPagination'



class Users extends Component {

    constructor(props) {
      
        super(props)
        this.tableHeaders=["#","Name","Email Address","Gender","status","Created date","Update date"]
    }

    onRowClick(param){
        this.props.history.push('/userprofile',param)
    }

    render() {

        return (
                <DataPagination
                requestData={userController.getUsers} 
                tableHeaders={this.tableHeaders} 
                mapData={mapUsers}
                onRowClick={this.onRowClick.bind(this)}
                hasSearch={true}
                title={'User Directory'}
                />
         
        )
    }
}

export default Users;