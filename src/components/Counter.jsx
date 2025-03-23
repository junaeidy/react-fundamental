import { Button, Divider, Input } from "@heroui/react";
import React, { useState } from "react";
import {useDispatch, useSelector , connect} from 'react-redux'


//FUNCTIONAL COMPONENT
const Counter = () => {
    const selector = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const [count, setCount] = useState(0);
    const[inputCounter, setInputCounter] = useState(0);

    const incrementCounter = () => {
        setCount(count + 1);
    };
    const decrementCounter = () => {
        setCount(count - 1);
    };

    const incrementGlobalCounter = () => {
        dispatch({ type: 'INCREMENT' });
    };
    const decrementGlobalCounter = () => {
        dispatch({ type: 'DECREMENT' });
    };

    const setGlobalCounter = () => {
        dispatch({ type: 'SET', payload: inputCounter });
    };
    return (
        <div>
            <h1 className="text-center font-semibold text-2xl">Local State Counter</h1>
            <div className="flex justify-around items-center min-h-32">
                <Button onClick={decrementCounter} color="danger">Substract</Button>
                <span className="text-3xl font-semibold">{count}</span>
                <Button onClick={incrementCounter} color="success">Add</Button>
            </div>
            <Divider />

            <h1 className="font-semibold text-center text-2xl">Global State Counter</h1>
            <div className="flex justify-around items-center min-h-32">
                <Button onPress={decrementGlobalCounter} color="danger">Substract</Button>

                <div className="flex flex-col gap-1">
                    <Input type="number" value={inputCounter} onChange={(event) => setInputCounter(parseInt(event.target.value))} className="text-center" />
                    <Button onPress={setGlobalCounter} color="secondary">Set</Button>
                </div>
                
                <Button onPress={incrementGlobalCounter} color="success">Add</Button>
            </div>

            <p className="text-2xl font-semibold text-center">
                Global Value: {selector.count}
            </p>
        </div>
    )
};

export default Counter;

//CLASS COMPONENT

// class Counter extends React.Component {
//     state = {
//         count: 0,
//         inputCounter: 0
//     };
//     incrementCounter = () => {
//         this.setState((prevState) => ({
//             count: prevState.count + 1
//         }));
//     };
//     decrementCounter = () => {
//         this.setState((prevState) => ({
//             count: prevState.count - 1
//         }));
//     };
//     render() {
//         return (
//             <div>
//                 <div className="flex justify-around items-center min-h-96">
//                     <Button onClick={this.decrementCounter} color="danger">Substract</Button>
//                     <span className="text-3xl font-semibold">{this.state.count}</span>
//                     <Button onClick={this.incrementCounter} color="success">Add</Button>
//                 </div>

//                 <Divider />
//                 <div className="flex flex-col gap-1">
//                 <h1 className="font-semibold text-center text-2xl">Global State Counter</h1>
//                     <div className="flex justify-around items-center min-h-32">
//                         <Button onPress={this.props.decrementGlobalCounter} color="danger">Substract</Button>

//                         <div className="flex flex-col gap-1">
//                             <Input type="number" className="text-center" value={this.state.inputCounter} onChange={(event) => this.setState({inputCounter: parseInt(event.target.value)})} />
//                             <Button onPress={() => this.props.setGlobalCounter(this.state.inputCounter)} color="secondary">Set</Button>
//                         </div>
                        
//                         <Button onPress={this.props.incrementGlobalCounter} color="success">Add</Button>
//                     </div>

//                     <p className="text-2xl font-semibold text-center">
//                         Global Value: {this.props.counter.count}
//                     </p>
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (store) => {
//     return {
//         counter: store.counter
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         incrementGlobalCounter: () => dispatch({ type: 'INCREMENT' }),
//         decrementGlobalCounter: () => dispatch({ type: 'DECREMENT' }),
//         setGlobalCounter: (payload) => dispatch({ type: 'SET', payload })
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);