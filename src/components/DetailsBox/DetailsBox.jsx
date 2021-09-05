import React , {Component} from 'react';
import styles  from './DetailsBox.module.css';
import { Typography, Buttons , Grid } from '@material-ui/core';

class DetailsBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            AreaWidth:'',
            AreaHeight: '',
            TotalArea:'',
            VolumeWidth:'',
            VolumeHeight:'',
            VolumeLength:'',
            TotalVolume:'',
            DesignArea:'',
            DescriptionBox:''
        };
        this.handleAreaWidth = this.handleAreaWidth.bind(this);
        this.handleAreaHeight = this.handleAreaHeight.bind(this);
        this.handleTotalArea = this.handleTotalArea.bind(this);
        this.handleVolumeWidth = this.handleVolumeWidth.bind(this);
        this.handleVolumeHeight = this.handleVolumeHeight.bind(this);
        this.handleVolumeLength = this.handleVolumeLength.bind(this);
        this.handleTotalVolume = this.handleTotalVolume.bind(this);
        this.handleDesignArea = this.handleDesignArea.bind(this);
        this.handleDescriptionBox = this.handleDescriptionBox.bind(this);
    }

    handleAreaWidth(event){
        this.setState({AreaWidth: event.target.value});
    }
    handleAreaHeight(event){
        this.setState({AreaHeight: event.target.value});
    }
    handleTotalArea(event){
        this.setState({TotalArea: event.target.value});
    }
    handleVolumeWidth(event){
        this.setState({VolumeWidth: event.target.value});
    }
    handleVolumeHeight(event){
        this.setState({handleVolumeHeight: event.target.value});
    }
    handleVolumeLength(event){
        this.setState({handleVolumeLength: event.target.value});
    }
    handleTotalVolume(event){
        this.setState({handleTotalVolume: event.target.value});
    }
    handleDesignArea(event){
        this.setState({handleDesignArea: event.target.value})
    }
    handleDescriptionBox(event){
        this.setState({handleDescriptionBox: event.target.value})
    }

    render(){
        return(
            <div>
                <div className={styles.form2}>  
                    <div id={styles.Details} className={styles.tabcontent}>
                        <div id={styles.DetailsBox}>
                            <div className={styles.Area}>
                                Area <br></br>
                                <input type="number" placeholder="10" onChange={this.handleAreaWidth} value={this.state.AreaWidth}></input>
                                <input type="number" placeholder="10" onChange={this.handleAreaHeight} value={this.state.AreaHeight}></input>
                                =
                                <input type="number" placeholder="100" onChange={this.handleTotalArea} value={this.state.TotalArea}></input>
                            </div>
                            <br></br>
                            <div className={styles.Volume}>
                                Volume  <br></br>
                                <input type="number" placeholder="10" onChange={this.handleVolumeWidth} value={this.state.VolumeWidth}></input>
                                <input type="number" placeholder="10" onChange={this.handleVolumeHeight} value={this.state.VolumeHeight}></input>
                                <input type="number" placeholder="7"  onChange={this.handleVolumeLength} value={this.state.VolumeLength}></input>
                                =
                                
                                <input type="number" placeholder="700" onChange={this.handleTotalVolume} value={this.state.TotalVolume}></input>
                            </div>
                            <br></br>
                            <div className={styles.DesignArea}>
                                Design area <br></br>
                                <input type="number" placeholder="884" onChange={this.handleDesignArea} value={this.state.DesignArea}></input>
                            </div>
                            <br></br>
                            <div className={styles.Zone}>
                                <div className={styles.ZoneTitle}>
                                    Zone
                                </div>        
                                <table>
                                    <tr>
                                        <th>Side</th>
                                        <th>Requirement</th>
                                    </tr>
                                    <tr>
                                        <td>Elder son bedroom/East wall</td>
                                        <td>Requirement-1</td>
                                    </tr>
                                    <tr>
                                        <td>Elder son bedroom/East wall</td>
                                        <td>Requirement-2</td>
                                    </tr>
                                    <tr>
                                        <td>Elder son bedroom/East wall</td>
                                        <td>Requirement-3</td>
                                    </tr>
                                </table><br></br><br></br>
                            </div>
            
                            <div>
                                <div className={styles.DescriptionBox}>
                                    Description Box 
                                </div> <br></br>
                                <textarea className={styles.DescriptionArea} onChange={this.handleDescriptionBox} value={this.state.DescriptionBox}></textarea>
                            </div>
                        </div>
                </div>
            </div>
            </div>
        )
    }
}
export default DetailsBox;