//Brian Dilone, 4/13/2026, IT302-452, Phase 4 Read Node.js Data Using React Assignment, bd294@njit.edu
import React, {useState, useEffect} from 'react'
import CatDataService from '../services/catsDataService'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const Cat = (props) => {

  const [cat, setCat] = useState({
    id: null,
    httpNumber: "",
    httpCode:"",
    userDescriptions: []
  })
 let { id } = useParams();

 const getCat = id => {
  CatDataService.get(id)
    .then(response => {
      setCat(response.data)
      console.log(response.data)
    })
    .catch(e => {
      console.log(e);
    })
}

useEffect( () => {
  getCat(id)
    },[id])

  




return (
    <div>
        <Container>
<Row>
<Col>
<Image src={cat.image} fluid />
</Col>
<Col>
<Card>
<Card.Header as="h5">{cat.httpCode}</Card.Header>
<Card.Body>
<Card.Text>
{cat.description}
</Card.Text>
{props.user &&
<Link to={"/bd294_cats/" + id + "/userDescription"}>
Add User Description
</Link>}
</Card.Body>
</Card>
<br></br>
<h2>User Descriptions</h2><br></br>
{(cat.userDescription_bd294 || []).map((description, index) => {
return (
<Card key={index}>
<Card.Body>
<h5>{description.name + " reviewed on " + new Date(Date.parse(description.date)).toDateString()}</h5>
<p>{description.description}</p>
{ props.user && props.user.id === description.user_id &&
<Row>
<Col><Link
 to={"/bd294_cats/" + id + "/userDescription"}
 state={{ currentDescription: description }}
>Edit</Link>
</Col>
</Row> }
</Card.Body>
</Card>
)
})}

</Col>
</Row>
</Container>

    </div>
  );
}

export default Cat;

