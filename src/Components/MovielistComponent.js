import React, { Component } from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle,Button, CardSubtitle,Modal, ModalBody} from 'reactstrap';
import adventurelist from '../data/padoverview';
import animationlist from '../data/panimoverview';
import comedylist from '../data/pcmoverview';
import crimelist from '../data/pcroverview';
import dramalist from '../data/pdroverview';
import horrorlist from '../data/phroverview';
import thrillerlist from '../data/pthoverview';
import actionlist from '../data/pactoverview';
import scifilist from '../data/pscioverview';

function Rendercard(props){
    return(
        <>{
            props.ml.map((item)=>{
                return(
                        <Card key={item.id}>
                        <CardImg src={item.image} top width="100%" alt="avengers-image"/>
                        <CardBody>
                            <CardTitle tag="h5"><strong>{item.title}</strong> </CardTitle>
                            <CardSubtitle className="text-muted">{item.year}</CardSubtitle>
                            <CardText className="card-text"><strong>Genre:</strong>{item.genre.map((gen)=>{return(gen+", ")})}<br></br> 
                                <button className="viewmore" onClick={()=>{props.onClick(item)}}>View more</button><br></br>
                                <span className="rating">{item.rating}/10</span>
                            </CardText>
                        </CardBody>
                    </Card> 
                );
            })
        }
        </>
    );
}


class Movielist extends Component{
    constructor(props){
        super(props);
        this.state={
            "popular":adventurelist,
            "action":actionlist,
            "adventure":adventurelist,
            "Animation":animationlist,
            "comedy":comedylist,
            "crime":crimelist,
            "drama":dramalist,
            "horror":horrorlist,
            "thriller":thrillerlist,
            "scifi":scifilist,
            isMore:true,
            end:20,
            isModalOpen:false
        }
        this.activeitem=this.state[this.props.genre][0];
    }
    
    viewModal=(item)=>{
        this.activeitem=item;
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }
    
    viewmore=()=>{
        if(this.state[this.props.genre].length-this.state.end>=20){
            this.setState({end:this.state.end+20});
        }
        else if(this.state[this.props.genre].length-this.state.end>0){
            this.setState({end:this.state.end+(this.state[this.props.genre].length-this.state.end)});
            this.setState({isMore:false});
        }else{
            this.setState({isMore:false});
        }
    }

    render(){
        return(
            <>
                <h1>{this.props.genre.slice(0,1).toUpperCase()+this.props.genre.slice(1)}</h1>
                <div class="row">
                    <Rendercard ml={this.state[this.props.genre].slice(0,this.state.end)} onClick={this.viewModal}/>
                </div>
                {this.state.isMore && <Button onClick={()=>{this.viewmore()}}>View More</Button>}
                <Modal isOpen={this.state.isModalOpen} toggle={this.viewModal} size="lg">
                        <ModalBody>
                            <div className="row">
                                <Button close onClick={this.viewModal} className="closebtn"/>
                                <div className="col-4">
                                    <img className="movieinfoimage" src={this.activeitem.image} alt={this.activeitem.title}/>
                                </div>
                                <div>
                                    <table className="movieinfo">
                                        <tr><th>Title</th><td>{this.activeitem.title}</td></tr>
                                        <tr><th>Year</th><td>{this.activeitem.year}</td></tr>
                                        <tr><th>Rating</th><td>{this.activeitem.rating}</td></tr>
                                        <tr><th>Genre</th><td>{this.activeitem.genre}</td></tr>
                                        <tr><th>Release Date</th><td>{this.activeitem.releaseDate}</td></tr>
                                        <tr><th>Running Time</th><td>{this.activeitem.runningTimeInMinutes} mins</td></tr>  
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <hr></hr>
                                <h3>Outline</h3>
                                <p>{this.activeitem.outline}</p>
                                <h3>Summary</h3>
                                <p>{this.activeitem.summary}</p>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>
            </>
        );
    }
}

export default Movielist;