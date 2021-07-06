import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap/'
export class drinkCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={this.props.item.strDrinkThumb} />
                    <Card.Body>
                        <Card.Title>Name : {this.props.item.strDrink}</Card.Title>
                        <Card.Text>
                            ID : {this.props.item.idDrink}
                        </Card.Text>
                        <Card.Footer>
                            <Button variant="primary" coClick={() => this.props.addToFav(this.props.item)}>Add To My Fav</Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default drinkCard
