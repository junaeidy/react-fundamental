import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";

const TodoCard = () => {
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
      <CardHeader className="font-bold text-lg">Monday</CardHeader>
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
      </CardFooter>
    </Card>
  )
}

export default TodoCard;