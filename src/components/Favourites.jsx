
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { StarFill } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFav } from '../store/actions'

/* const mapDispatchToProps = (dispatch) => ({
  removeFromFav: (f) => {
    dispatch(removeFromFav(f))
  },
}) */

const Favourites = () => {

  const favouriteResults = useSelector((state) => state.favouritesReducer.favourites)

  const dispatch = useDispatch()
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <ListGroup>
            {favouriteResults && favouriteResults.map((f, i) => (
              <ListGroupItem key={i}>
                <StarFill onClick={() => dispatch(removeFromFav(f))} />
                <span>{f}</span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}


export default Favourites