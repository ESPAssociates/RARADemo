import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { Doughnut } from 'react-chartjs-2';
import riskChart from '../../images/riskChart.PNG'

const Risk = (props) => {
    const attributes = props.graphics
    const HCFs = attributes.HCFs
    const str2obj = str => {
        return str
            .split(';')
            .map(key => {
                return key
                    .split(',')
                    .map(val => val.trim())
            })
            .reduce((accumulator, currentValue) => {
                accumulator[currentValue[0]] = currentValue[1]
                return accumulator
            }, {})
    }
    const HCFobj = HCFs ? str2obj(HCFs) : {};
    const HCFobjArray = Object.values(HCFobj).map((persent) => { return Number(persent) }) ;
    const legend = {
        display: true,
        position: 'right',
        fullWidth: true,
        reverse: false,
        labels: {
            fontColor: '#ffffff'
        }
    };
    const data = {
        datasets: [{
            data: HCFobjArray,
            backgroundColor: ["#ff4500", "#4286f4", "#41f4be", "#8b41f4", "#e241f4", "#f44185", "#f4cd41"]
        }],
        labels: Object.keys(HCFobj)
    };

    return (
        <div className="dashboardTaps">
            {attributes.RskTotScr >= 0 ?
                <div>
                    <table className="tblRisk">
                        <tbody>
                            <tr>
                                <th>Risk Total Score</th>
                                <td>{attributes.RskTotScr}</td>
                            </tr>
                            <tr>
                                <th>Name for RARR Simulation</th>
                                <td>{attributes.RunName}</td>
                            </tr>
                            <tr>
                                <th>Date and Time of RARR Run</th>
                                <td><Moment format="MM/DD/YY HH:mm" >{attributes.RunDteTime}</Moment></td>
                            </tr>
                            <tr>
                                <th>Min Event Flooding Above FFE</th>
                                <td>{attributes.RskAEvnt}</td>
                            </tr>
                            <tr>
                                <th>Min Event Flooding of LME</th>
                                <td>{attributes.RskBEvnt}</td>
                            </tr>
                            <tr>
                                <th>Min Event Flooding of LAG</th>
                                <td>{attributes.RskCEvnt}</td>
                            </tr>
                            <tr>
                                <th>Min Event flood Surrounding the Property</th>
                                <td>{attributes.RskDEvnt}</td>
                            </tr>
                            <tr>
                                <th>Min Event flood Surrounding the Building</th>
                                <td>{attributes.RskEEvnt}</td>
                            </tr>
                            <tr>
                                <th>Min Event Flood Surrounding Critical Facility</th>
                                <td>{attributes.RskFEvnt}</td>
                            </tr>
                            <tr>
                                <th>Min Event Flood Water Touching Damaged Structure</th>
                                <td>{attributes.RskIEvnt} </td>
                            </tr>
                            <tr>
                                <th>Min Event Flooding Unattached Improvement Significantly</th>
                                <td>{attributes.RskJEvnt}</td>
                            </tr>
                            <tr>
                                <th>Min Event Flooding Unattached Improvement Moderately</th>
                                <td>{attributes.RskKEvnt}</td>
                            </tr>
                            <tr>
                                <th>Min Event Flood Surrounding the Parking</th>
                                <td>{attributes.RskLEvnt}</td>
                            </tr>
                            <tr>
                                <th>Min event flooding the yard</th>
                                <td>{attributes.RskMEvnt}</td>
                            </tr>
                            <tr>
                                <th>High Danger Depth-velocity Zone Location Multiplier</th>
                                <td>{attributes.RskNMult}</td>
                            </tr>
                            <tr>
                                <th>Medium Danger Depth-velocity Zone Location Multiplier</th>
                                <td>{attributes.RskOMult}</td>
                            </tr>
                            <tr>
                                <th>Impacted by Frequent Storm drainage overflows Location Multiplier</th>
                                <td>{attributes.RskPMult}</td>
                            </tr>
                            <tr>
                                <th>Community Encroachment Location Multiplier</th>
                                <td>{attributes.RskQMult}</td>
                            </tr>
                            <tr>
                                <th>Overall Risk Location Multiplier</th>
                                <td>{attributes.RskLocMult}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h6 style={{ color: '#ffffff' }}>Highest Contributing Risk Components (%)</h6>
                    {attributes.RskTotScr === 0 ? <img src={riskChart} alt="No Risk Found for this Building" className="riskChart"/> :
                    <Doughnut legend={legend} data={data} />
                    }   
                </div> :
                <h4>No Risk Analysis Data Available </h4>
            }

        </div>
    )
}
export default Risk