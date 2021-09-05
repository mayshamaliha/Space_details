import React, { Component } from 'react';
import styles  from './DetailsBar.module.css';
import { Typography, Buttons, Grid }from '@material-ui/core';
import DetailsBox from './../DetailsBox/DetailsBox';
class DetailsBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            details: true,
            cogs: false,
            measurement: false,
            link: false,
            attachment: false,
            history: false
        };
    }

    

    handleDetailsShow(){
        this.setState({details: true, cogs: false, measurement:false, link: false, attachment:false,history:false});
    }
    handleCogsShow(){
        this.setState({details: false, cogs: true, measurement:false, link: false, attachment:false,history:false});
    }
    handleMeasurementShow(){
        this.setState({details: false, cogs: false, measurement:true, link: false, attachment:false,history:false})
    }
    handleLinkShow(){
        this.setState({details: false, cogs: false, measurement:false, link: true, attachment:false,history:false})
    }
    handleAttachmentShow(){
        this.setState({details: false, cogs: false, measurement:false, link: false, attachment:true,history:false})
    }
    handleHistoryShow(){
        this.setState({details: false, cogs: false, measurement:false, link: false, attachment:false,history:true})
    }
    render(){
        return(
            <div >
                <div className={styles.DetailsBar}>
                    <button style={{background: this.state.details? '#ef5359':'white', color: this.state.details? 'white': 'black'}} className={styles.tablink} onClick={()=>this.handleDetailsShow()} id="defaultOpen">Details</button>
                    <button style={{background: this.state.cogs? '#ef5359':'white', color: this.state.cogs? 'white': 'black'}} className={styles.tablink} onClick={()=>this.handleCogsShow()}>COGS</button>
                    <button style={{background: this.state.measurement? '#ef5359':'white', color:this.state.measurement? 'white': 'black'}} className={styles.tablink} onClick={()=>this.handleMeasurementShow()}>Measurement</button>
                    <button style={{background: this.state.link? '#ef5359':'white', color:this.state.link? 'white':'black'}} className={styles.tablink} onClick={()=>this.handleLinkShow()}>Link</button>
                    <button style={{background: this.state.attachment? '#ef5359':'white', color:this.state.attachment? 'white': 'black'}} className={styles.tablink} onClick ={()=>this.handleAttachmentShow()}>Attachment</button>
                    <button style={{background: this.state.history? '#ef5359':'white', color:this.state.history? 'white': 'black'}} className={styles.tablink} onClick={()=>this.handleHistoryShow()}>History</button>
                </div>
                <br></br>
                <br></br>
                {this.state.details?
                    <DetailsBox/>
                    : null
                 }

                {this.state.cogs?
                    <div>
                        <br></br>
                        <br></br>
                        <p>COGS</p>
                    </div>
                    
                    : null
                 }
                 {this.state.measurement?
                    <div>
                    <br></br>
                    <br></br>
                    <p>Measurement</p>
                    </div>
                    
                    : null
                 }
                 {this.state.link?
                    <div>
                    <br></br>
                    <br></br>
                    <p>Link</p>
                </div>
                    
                    :null
                 }
                 {this.state.attachment?
                    <div>
                    <br></br>
                    <br></br>
                    <p>Attachment</p>
                    </div>
                    
                    :null
                 }
                 {this.state.history?
                    <div>
                    <br></br>
                    <br></br>
                    <p>History</p>
                    </div>
                    
                    :null
                 }
                
            </div>

            
        )
    }
}
export default DetailsBar;
