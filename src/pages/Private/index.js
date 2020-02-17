import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import { loadCss } from 'esri-loader';
import Dashboard from '../../components/Dashboard';
import Map from '../../components/Map';
import navImage from '../../images/navTest.PNG'

class Private extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dashboardView: "close",
            graphics : {}
        }
        
    }
 
    setDashboard = (dashboardView) => {
        this.setState({ dashboardView});
    }
    setGraphics = (graphics) => {
        this.setState({ graphics});
    }

    componentDidMount() {
        // get esrii default css
        loadCss();
    }
 
    render() {
        return (
            <div style={{ width: '100vw', height: '100vh' }}>
                <img src={navImage} alt="TEST NAV FROM FIGMA" className="navWrapper"/>
                <Map
                    setDashboard={this.setDashboard}
                    setGraphics ={this.setGraphics}
                />
                <Dashboard
                    setDashboard={this.setDashboard}
                    dashboardView={this.state.dashboardView}
                    graphics={this.state.graphics}
                />
            </div>
        );

    }
}

export default Private;