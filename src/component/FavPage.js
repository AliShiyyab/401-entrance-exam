import React, { Component } from 'react'
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap/';
import FavPageCard from './FavPageCard';
import UpdateModals from './UpdateModals';
export class FavPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favDrink: [], show: false,
            strDrink: "",
            strDrinkThumb: "",
            idDrink: -1
        }
    }

    componentDidMount = async () => {
        const url = `http://localhost:3198/getDataFromDB`;
        axios.get(url)
            .then((result) => {
                this.setState({
                    favDrink: result.data,
                });
            }).catch((error) => { console.log(error) });
            console.log(this.state.favDrink);
    };

    deleteFun = (id) => {
        const url = `http://localhost:3198/deleteDataFromDB/${id}`;
        axios.delete(url).then(result => {
            this.setState({
                favDrink: result.data
            });
        }).catch(error => { console.log(error) });
    }

    showModal = (object) => {
        this.setState({
            show: true,
            strDrink: object.strDrink,
            strDrinkThumb: object.strDrinkThumb,
            idDrink: object.idDrink
        })
    }
    closeMdal = () => {
        this.setState({
            show: false,
        });
    }
    updateFromData = (event) => {
        event.preventDefault();
        const updateObj = {
            idDrink: this.state.idDrink,
            strDrinkThumb: this.state.strDrinkThumb,
            strDrink: this.state.strDrink,
        }
        const url = `http://localhost:3198/updateDataFromDB`;
        axios.put(url, updateObj).then(result => {
            this.setState({
                favDrink: result.data,
                show: false
            });
        }).catch(error => { console.log(error) });
    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        {
                            this.state.favDrink.map((item, idx) => {
                                return (
                                    <Col key={idx}>
                                        <FavPageCard key={idx} idx={idx} item={item} deleteFun={this.deleteFun} showModal={this.showModal} />
                                    </Col>
                                )
                            })
                        }
                    </Row>

                    <UpdateModals showModal={this.state.show} closeModal={this.closeMdal} strDrink={this.state.strDrink} strDrinkThumb={this.state.strDrinkThumb} updateFromData={this.updateFromData} />
                </Container>
            </div>
        )
    }
}

export default FavPage
