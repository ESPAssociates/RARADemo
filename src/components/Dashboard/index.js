import React, { Component } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import {AiFillEyeInvisible} from "react-icons/ai";
import General from '../General';
import Risk from '../Risk';
import Mitigation from '../Mitigation';
import History from '../History';



class Dashboard extends Component {

    closeDashboard =()=> {
        this.props.setDashboard("close")
    }

    render() {
        console.log('dashboard',this.props.graphics)
        console.log('dashboard',this.props.dashboardView)
        return (
            <div className="dashboardWrapper" >
                {this.props.dashboardView === 'open'?
               <Container>
                <AiFillEyeInvisible className="close" onClick={this.closeDashboard}/>
                <Tabs defaultActiveKey="general" >
                    <Tab eventKey="general" title="General">
                        <h3 className="dashboardTitle">Building Genaral Information</h3>
                        <General graphics= {this.props.graphics} />
                    </Tab>
                    <Tab eventKey="risk" title="Risk">
                        <h3 className="dashboardTitle"> Risk Information </h3>
                        <Risk graphics= {this.props.graphics} />
                    </Tab>
                    <Tab eventKey="mitigation" title="Mitigation" >
                        <h3 className="dashboardTitle"> Mitigation Measures </h3>
                        <Mitigation graphics= {this.props.graphics} />
                    </Tab>
                    <Tab eventKey="history" title="History" >
                        <h3 className="dashboardTitle"> Risk Scor History </h3>
                        <History graphics= {this.props.graphics} />
                    </Tab>
                </Tabs>
              </Container>
                 :
                 <div></div>
             }
              
            </div>
        );

    }
};

export default Dashboard;