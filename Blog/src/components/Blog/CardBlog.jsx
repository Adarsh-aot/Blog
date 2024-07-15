import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
  
function CardBlog(props) {
  return (
    <>
        <Card className="mt-10 w-96 mx-4 ">
      
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {props.title}
        </Typography>
        <Typography>
          {props.type ?  <h1></h1>: props.content}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {props.type ? <Link to={`/Blog/${props.id}`}> <Button>Read More</Button></Link> : <Link to={'/Blog'} ><Button>Back</Button></Link>}
       
      </CardFooter>
    </Card>
       
    </>
  )
}

export default CardBlog