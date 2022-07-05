import { useState } from 'react'

import { Container, Row, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getJobsAction } from '../store/actions'
import JobResult from './JobResult'

const MainSearch = () => {

  const [query, setQuery] = useState("")

  const allJobs = useSelector ((state) => state.jobsReducer.fetchedJobs)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setQuery( e.target.value )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getJobsAction(query))
  }

  
    return (
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1>Search Jobs</h1>
            <Link to="/favourites" className='btn btn-warning'>
              Favourites
              </Link>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="Search Jobs here!!"
              />
            </Form>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {allJobs.map((jobData) => (
              <JobResult key={jobData._id} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }


export default MainSearch
