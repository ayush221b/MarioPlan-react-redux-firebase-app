import React, { Component } from 'react'
import Notifications from './Notifications'

class Dashboard extends Component {

    render(){
        return(
            <div>
                <div className="dashboard conatiner">
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="col s12 m5 offset-m1">
                                <Notifications/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}