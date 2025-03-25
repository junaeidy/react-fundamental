import React, { useContext } from "react";
import { SignUpContext } from "../context/SignUpContext";
import { Button } from "@heroui/react";

// const Heading = () => {
//     const signUpContext = useContext(SignUpContext);
//     return <h1>{signUpContext.title}</h1>;
// };

class Heading extends React.Component {
    static contextType = SignUpContext;
    
    render() {
        return (
            <>
                <h1>{this.context.title}</h1>
                <Button color="primary" onPress={() => this.context.setTitle('Hello World')}>Change Title</Button>
            </>
        )
        
    }
}

export default Heading;