import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
export class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allData: []

        }
    }

    componentDidMount = async () => {
        let url = 'https://exam301backend.herokuapp.com';
        console.log('hellooo')
        const data = await axios.get(`${url}/getalldata`)
        console.log(data)
        this.setState({
            allData: data.data
        })
        console.log(this.state.allData)

    }

    addtofav=async(idx)=>{
        const name=this.state.allData[idx].strDrink;
        const url=this.state.allData[idx].strDrinkThumb;
        let urla = 'https://exam301backend.herokuapp.com';
        const data = await axios.post(`${urla}/addtofav?name=${name}&url=${url}`)

    }

    render() {
        return (
            <div>
                <CardGroup>

                    {this.state.allData.map((item, idx) => {
                        return (
                            <div>
                                <Card>
                                    <Card.Img variant="top" src={item.strDrinkThumb} style={{width: '20rem'}} />
                                    <Card.Body>
                                        <Card.Title>{item.strDrink}</Card.Title>
                                        <Button onClick={()=>this.addtofav(idx)}>add to fav</Button>
                                    </Card.Body>
                                    
                                </Card>

                            </div>
                        )
                    })}


                </CardGroup>

            </div>
        )
    }
}

export default Home
