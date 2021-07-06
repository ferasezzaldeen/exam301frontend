import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Updatform from './Updatform';
export class Fav extends Component {



    constructor(props) {
        super(props)
        this.state = {
            favData: [],
            show:false,
            id:-1,
            name:'',
            url:'',
        }
    }

    
    componentDidMount = async () => {
        let url = 'https://exam301backend.herokuapp.com';
        const data = await axios.get(`${url}/getfavdata`)
        this.setState({
            favData: data.data
        })

    }
    deletedata=async(idx)=>{

        const id=this.state.favData[idx]._id
        let url = 'https://exam301backend.herokuapp.com';
        const data = await axios.delete(`${url}/deletedats?id=${id}`)
        this.setState({
            favData: data.data
        })

    }


    openmodal=(idx)=>{
        const id=this.state.favData[idx]._id
        const name=this.state.favData[idx].name
        const url=this.state.favData[idx].url

        
        this.setState({
            show:true,
            id:id,
            name:name,
            url:url,
        })
    }
    closeModal=()=>{
        this.setState({
            show:false,
        })
    }

    
    updateData=async(e)=>{
        e.preventDefault()
        const name=e.target.name.value;
        const url=e.target.url.value;
        const id=this.state.id
        let urlu = 'https://exam301backend.herokuapp.com';
        const data = await axios.put(`${urlu}/updatedata?name=${name}&url=${url}&id=${id}`)
        this.setState({
            favData: data.data
        })
    }   


    render() {
        return (
            <div>
            <CardGroup>

                {this.state.favData.map((item, idx) => {
                    return (
                        <div>
                            <Card>
                                <Card.Img variant="top" src={item.url} style={{width: '20rem'}} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Button onClick={()=>this.deletedata(idx)}>Delete</Button>
                                    <Button onClick={()=>this.openmodal(idx)}>Update</Button>
                                </Card.Body>
                                
                            </Card>

                        </div>
                    )
                })}


            </CardGroup>
            <Updatform closeModal={this.closeModal} show={this.state.show} name={this.state.name} url={this.state.url} updateData={this.updateData}/>
        </div>
        )
    }
}

export default Fav
