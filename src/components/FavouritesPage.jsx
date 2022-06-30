import { Component } from "react";
import {Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import {Star} from 'react-bootstrap-icons'
import {connect} from 'react-redux'

const mapStateToProps = () => {
    return{}
}
const mapDispatchToProps = () => {
    return(
        <></>
    )
}

class FavouritesPage extends Component {
    render() {
        return(
<Container>
    <Row>
        <Col sm={12}>
        <ListGroup>
              {this.props.favourites.map((f, i) => (
                <ListGroupItem key={i}>
                  <Star onClick={() => this.props.removeFromFav(f)} />
                  <span>{f}</span>
                </ListGroupItem>
              ))}
            </ListGroup>
        </Col>
    </Row>
</Container>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(FavouritesPage)