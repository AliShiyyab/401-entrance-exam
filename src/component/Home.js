import React, { Component } from 'react'
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap/';
import DrinkCard from './drinkCard';
export class Home extends Component {
    //constroctor
    constructor(props) {
        super(props);
        this.state = { allData: [] };
    }
    //component did mount
    componentDidMount = async () => {
        const url = `http://localhost:3198/getDataFromApi`;
        axios.get(url).then(result => {
            console.log(result.data);
            this.setState({
                allData: result.data
            });
        }).catch(err => {
            console.log(err);
        })

    }

    //AddtoFav
    addToFav = (object) => {
        const url = `http://localhost:3198/addToFav`;
        axios.post(url, object).then(result => {
            console.log(result.drinks);
        }).catch(err => {
            console.log(err);
        })
        console.log(object);
    }

    render() {
        const value = this.state.allData.map((item, idx) => {
            return (
                <Col>
                    <DrinkCard key={idx} addToFav={this.addToFav} item={item} />
                </Col>
            );
        })
        return (
            <div>
                <Container>
                    <Row>

                        {value}
                        {/* console.log(this.state.allData) */}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home
