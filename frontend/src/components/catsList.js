//Brian Dilone, 4/13/2026, IT302-452, Phase 4 Read Node.js Data Using React Assignment, bd294@njit.edu
import React, { useState, useEffect } from 'react'
import CatDataService from "../services/catsDataService"
import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


const CatsList = () => {
  const [cats, setCats] = useState([]);
  const [searchHttpNumber, setSearchHttpNumber] = useState("");
  const [searchHttpCode, setSearchHttpCode] = useState("");
  const [codes, setCodes] = useState(["All Codes"]);
useEffect(() => {
    retrieveCats();
  }, []);


  const retrieveCats = () => {
    CatDataService.getAll()
      .then((response) => {
        console.log(response.data);
        setCats(response.data.cats);
      })
      .catch((e) => {
        console.log(e);
      });
  };

 
const onChangeSearchHttpNumber = (e) => {
    const searchHttpNumber = e.target.value
    setSearchHttpNumber(searchHttpNumber);
  };

  const onChangeSearchHttpCode = (e) => {
    const searchHttpCode = e.target.value;
    setSearchHttpCode(searchHttpCode);
  };


  const find = (query, by) => {
    CatDataService.find(query, by)
      .then(response => {
        console.log(response.data)
        setCats(response.data.cats)
      })
      .catch(e => {
        console.log(e)
      })
  }


const findByHttpNumber =
    () => {
      setSearchHttpNumber("")
      find(searchHttpNumber, "httpNumber")
    }
  

   return (
    <div className="App">
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Search by HttpNumber"
                  value={searchHttpNumber}
                  onChange={onChangeSearchHttpNumber}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="button"
                onClick={findByHttpNumber}
              >
                Search
              </Button>
            </Col>
            <Col>
              <Form.Group>
                
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <Row>
          {cats.map((cat) => {
            return (
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img src={cat.image } />
                  <Card.Body>
                    <Card.Title>{cat.httpNumber}</Card.Title>
                    <Card.Text>
                      Code: {cat.httpCode}
                    </Card.Text>
                    <Card.Text>{cat.description}</Card.Text>
                    <Link to={"/bd294_cats/" + cat._id} >View User Descriptions</Link>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default CatsList;