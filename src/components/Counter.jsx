import { Button } from "@heroui/react";
import React, { useState } from "react";


//FUNCTIONAL COMPONENT
// const Counter = () => {
//     const [count, setCount] = useState(0);

//     const incrementCounter = () => {
//         setCount(count + 1);
//     };
//     const decrementCounter = () => {
//         setCount(count - 1);
//     };
//     return (
//         <div>
//             <div className="flex justify-around items-center min-h-96">
//                 <Button onClick={decrementCounter} color="danger">Substract</Button>
//                 <span className="text-3xl font-semibold">{count}</span>
//                 <Button onClick={incrementCounter} color="success">Add</Button>
//             </div>
//         </div>
//     )
// };


//CLASS COMPONENT

class Counter extends React.Component {
    state = {
        count: 0
    };
    incrementCounter = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    };
    decrementCounter = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }));
    };
    render() {
        return (
            <div>
                <div className="flex justify-around items-center min-h-96">
                    <Button onClick={this.decrementCounter} color="danger">Substract</Button>
                    <span className="text-3xl font-semibold">{this.state.count}</span>
                    <Button onClick={this.incrementCounter} color="success">Add</Button>
                </div>
            </div>
        )
    }
}

export default Counter;