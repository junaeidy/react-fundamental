import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import PropTypes from "prop-types";
import { withAlert } from './../hoc/withAlert';
import { withBackground } from "../hoc/withBackground";

const TodoCard = (props) => {
  // return (
  //   <div>
  //     <h4>Monday Card</h4>
  //     <ul>
  //       <li>Coding</li>
  //       <li>Mandi </li>
  //       <li>Makan</li>
  //     </ul>
  //   </div>
  // )

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="font-bold text-lg">{props.day} ({props.numberOfActivities})</CardHeader>
      <Divider/>
      <CardBody>
        <ul className="list-decimal list-inside">
          <li>Coding</li>
          <li>Mandi </li>
          <li>Makan</li>
        </ul>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Button>Add</Button>
        {props.propsTambahan}
      </CardFooter>
    </Card>
  )
}

TodoCard.propTypes = {
  day: PropTypes.string,
  numberOfActivities: PropTypes.number,
}

export default withBackground(withAlert(TodoCard));