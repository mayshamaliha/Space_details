import React, { Component } from 'react';
import styles from './Progress.module.css';
import { Typography, Button, Grid }from '@material-ui/core';


class Progress extends Component {
    constructor(props){
        super(props);
            this.state = {
                Risk: '',
                Priority:'',
                Point: '',
                Sdate:'',
                Edate:'',
                Duration:'',
                Effort:'',
            }
            this.handleRisk = this.handleRisk.bind(this);
            this.handlePriority = this.handlePriority.bind(this);
            this.handlePoint = this.handlePoint.bind(this);
            this.handleSdate = this.handleSdate.bind(this);
            this.handleEdate = this.handleEdate.bind(this);
            this.handleDuration = this.handleDuration.bind(this);
            this.handleEffort = this.handleEffort.bind(this);
    }

      handleRisk(event) {
        this.setState({Risk: event.target.value});
      }
      handlePriority(event) {
        this.setState({Priority: event.target.value});
      }
      handlePoint(event) {
        this.setState({Point: event.target.value});
      }
      handleSdate(event) {
        this.setState({Sdate: event.target.value});
      }
      handleEdate(event) {
        this.setState({Edate: event.target.value});
      }
      handleDuration(event) {
        this.setState({Duration: event.target.value});
      }
      handleEffort(event) {
        this.setState({Effort: event.target.value});
      }
    render (){
        return(
            <div className={styles.Progress}>
                <div >
                    <Grid container>
                        <Grid className={styles.ProgressItems} item xs={6}>
                            Risk<br></br>                            
                            <select onChange={this.handleRisk} value={this.state.Risk} style={{width:'70%'}}>
                                <option></option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </select>
                            <br></br>

                        </Grid>
                        <Grid className={styles.ProgressItems}item xs={6}>
                            Priority<br></br>                            
                            <select onChange={this.handlePriority} value= {this.state.Priority} style={{width:'70%'}}>
                                <option></option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </select>
                            <br></br>
                        </Grid>
                    </Grid>

                    <Grid container spacing ={24}>
                        <Grid className={styles.ProgressItems} item xs={3}>
                        Story point<br></br>
                        <input type="number" placeholder="30" onChange={this.handlePoint} value={this.state.Point}></input>
                        </Grid>

                        <Grid className={styles.ProgressItems} item xs={3}>
                        Start date<br></br>
                        <input type = "date" onChange={this.handleSdate} value={this.state.Sdate}></input>
                        </Grid>

                        <Grid className={styles.ProgressItems} item xs={3}>
                        End date<br></br>
                        <input type = "date" onChange={this.handleEdate} value={this.state.Edate}></input>
                        </Grid>
                    </Grid>

                    <Grid container spacing = {24}>
                        <Grid className={styles.ProgressItems} item xs={3}>
                        Duration<br></br>
                        <input onChange={this.handleDuration} value={this.state.Duration}></input>
                        </Grid>

                        <Grid className={styles.ProgressItems} item xs={3}>
                        Effort<br></br>
                        <input onChange={this.handleEffort} value={this.state.Effort}></input>
                        </Grid>

                    </Grid>

                 </div>
                 <div className={styles.submit}>
                 
                    Submit
                
                </div>
            </div>
            
        )
    }
}
export default Progress;