import React, { Component } from 'react';
import styles  from './SpaceClassification.module.css';
import { Typography, Button, Grid }from '@material-ui/core';


class SpaceClassification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            space: '',
            classification:'',
            type:'',
            Area: '',
            Sprint: '',
            StateProperty: '',
            Reason: '',
            Assigned: ''
        };    
        
        this.handleClassification = this.handleClassification.bind(this);
        this.handleSpace = this.handleSpace.bind(this);
        this.handleSpaceType = this.handleSpaceType.bind(this);
        this.handleArea = this.handleArea.bind(this);
        this.handleSprint = this.handleSprint.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleReason = this.handleReason.bind(this);
        this.handleAssigned = this.handleAssigned.bind(this);
      }
      
      handleSpace(event) {
        this.setState({space: event.target.value});
      }

      
      handleClassification(event){
          this.setState({classification: event.target.value});
      }

      handleSpaceType(event) {
        this.setState({type: event.target.value});
      }
      handleArea(event) {
        this.setState({Area: event.target.value});
      }
      handleSprint(event) {
        this.setState({Sprint: event.target.value});
      }
      handleState(event) {
        this.setState({StateProperty: event.target.value});
      }
      handleReason(event) {
        this.setState({Reason: event.target.value});
      }
      handleAssigned(event) {
        this.setState({Assigned: event.target.value});
      }
    
    render() {
 return (
            <div className= "main">
                <div className={styles.form1}>
                    <Grid container spacing = {2}>
                        <Grid item xs={3}>
                            Space Classification <br></br>
                            <select onChange={this.handleClassification} value={this.state.classification} style ={{width: '100%'}}>
                                <option></option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </select>
                        </Grid>
                        <Grid item xs={3}>
                            Space<br></br>
                            <select onChange={this.handleSpace} value={this.state.space} style={{width:'100%'}}>
                                <option></option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </select>                    
                        </Grid>
                        <Grid item xs={3}>
                            <div className="SpaceType">
                                Space Type <br></br>
                                <input type="text" onChange={this.handleSpaceType} value={this.state.type}></input>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={styles.AreaOptions}>
                    <Grid container spacing ={2}>
                        <Grid item xs={3}>
                            Area <br></br>
                            <select onChange={this.handleArea} value={this.state.Area} style ={{width: '100%'}}>
                                <option></option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </select>
                        </Grid>
                        <Grid item xs={3}>
                            Sprint<br></br>
                            <select onChange={this.handleSprint} value={this.state.Sprint} style={{width: '100%'}}>
                                <option></option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </select>
                        </Grid>
                        <Grid item xs={3}>
                            State<br></br>
                            <select onChange={this.handleState} value={this.state.StateProperty} style={{width:'100%'}}>
                                <option></option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </select>
                        </Grid>                        
                    </Grid>
                    <Grid container spacing ={2}>
                        <Grid item xs={3}>
                            Reason<br></br>
                            <select onChange={this.handleReason} value={this.state.Reason} style={{width:'100%'}}>
                                <option></option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </select>
                        </Grid>
                        <Grid item xs={3}>
                            Assign to<br></br>
                            <select onChange={this.handleAssigned} value={this.state.Assigned} style={{width:'100%'}}>
                                <option></option>
                                <option>a</option>
                                <option>b </option>
                                <option>c</option>
                            </select>
                        </Grid>
                    </Grid>
                </div>           
            </div>
            
        )
    }
}

export default SpaceClassification;