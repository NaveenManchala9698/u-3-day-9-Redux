import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Star, StarFill } from 'react-bootstrap-icons'
import { addToFav, removeFromFav } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'

/* const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (company) => dispatch(addToFav(company)),
  removeFromFavourites: (company) => dispatch(removeFromFav(company)),
}) */



const JobResult = ({
  data,
}) => {

const favouriteJobs = useSelector((state) => state.favouritesReducer.favourites)

const dispatch = useDispatch()
  const isFav = favouriteJobs.includes(data.company_name)
  const toggleFavourite = () => {
    isFav
      ? dispatch(removeFromFav(data.company_name))
      : dispatch(addToFav(data.company_name))
  }

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3} className="d-flex">
        {isFav ? (
          <StarFill
            color="gold"
            size={16}
            className="me-4 my-auto"
            onClick={toggleFavourite}
          />
        ) : (
          <Star
            color="gold"
            size={16}
            className="me-4 my-auto"
            onClick={toggleFavourite}
          /> 
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <Link to={{ pathname: data.url }} target="_blank">
          {data.title}
        </Link>
      </Col>
    </Row>
  )
}

export default JobResult