import React from 'react';
import Currency from 'react-currency-formatter';

const General = (props) => {

    const attributes = props.graphics
    return (
        <div className="dashboardTaps">
            {attributes.Address ?
                <table className="tblGeneral">
                  <tbody>
                    <tr>
                        <th>Unique Building ID</th>
                        <td>{attributes.UnqBldgID}</td>
                    </tr>
                    <tr>
                        <th>Parcel ID</th>
                        <td>{attributes.PID}</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>{attributes.Address}</td>
                    </tr>
                    <tr>
                        <th>Community</th>
                        <td>{attributes.Community}</td>
                    </tr>
                    <tr>
                        <th>Watershed</th>
                        <td>{attributes.Watershed}</td>
                    </tr>
                    <tr>
                        <th>FEMA Stream</th>
                        <td>{attributes.FEMAStrm}</td>
                    </tr>
                    <tr>
                        <th>Flood Zone</th>
                        <td>{attributes.FloodZone}</td>
                    </tr>
                    <tr>
                        <th>General occupancy type</th>
                        <td>{attributes.OccTypGen}</td>
                    </tr>
                    <tr>
                        <th>Number of Stories</th>
                        <td>{attributes.NumStory}</td>
                    </tr>
                    <tr>
                        <th>Heated Area</th>
                        <td>{attributes.HeatedArea} Sqft</td>
                    </tr>
                    <tr>
                        <th>Building  Value</th>
                        <td><Currency quantity={attributes.NetBldgVal} currency="USD"/></td>
                    </tr>
                    <tr>
                        <th>Year Built</th>
                        <td>{attributes.YearBuilt}</td>
                    </tr>
                    <tr>
                        <th>Parcel Card Number</th>
                        <td>{attributes.Cardno}</td>
                    </tr>
                    <tr>
                        <th>Finished Floor Elevation</th>
                        <td>{attributes.FFE} ft</td>
                    </tr>
                    <tr>
                        <th>Lowest Mechanical Elevation</th>
                        <td>{attributes.LME} ft</td>
                    </tr>
                    <tr>
                        <th>Lowest Adjacent Grade</th>
                        <td>{attributes.LAG} ft</td>
                    </tr>
                    <tr>
                        <th>Highest Adjacent Grade</th>
                        <td>{attributes.HAG} ft</td>
                    </tr>
                    <tr>
                        <th>Eff. 002 Year Existing WSEL</th>
                        <td>{attributes.WSE002yrEX} ft</td>
                    </tr>
                    <tr>
                        <th>Eff. 005 Year Existing WSEL</th>
                        <td>{attributes.WSE005yrEX} ft</td>
                    </tr>
                    <tr>
                        <th>Eff. 010 Year Existing WSEL</th>
                        <td>{attributes.WSE010yrEX} ft</td>
                    </tr>
                    <tr>
                        <th>Eff. 025 Year Existing WSEL</th>
                        <td>{attributes.WSE025yrEX} ft</td>
                    </tr>
                    <tr>
                        <th>Eff. 050 Year Existing WSEL</th>
                        <td>{attributes.WSE050yrEX} ft</td>
                    </tr>
                    <tr>
                        <th>Eff. 100 Year Existing WSEL</th>
                        <td>{attributes.WSE100yrEX} ft</td>
                    </tr>
                    <tr>
                        <th>Eff. 100 Year Future WSEL</th>
                        <td>{attributes.WSE100yrFU} ft</td>
                    </tr>
                    <tr>
                        <th>Eff. 500 Year Existing WSEL</th>
                        <td>{attributes.WSE500yrEX} ft</td>
                    </tr>
                  </tbody>
                </table> :
                <h3>No building data available</h3>
            }

        </div>
    )
}
export default General