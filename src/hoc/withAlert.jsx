/* eslint-disable no-unused-vars */
import React from "react";
import { toast } from "sonner";

export const withAlert = (InnerComponent) => {
    class WrapperComponent extends React.Component {
        // componentDidMount() {
        //     alert("Component mounted");
        // }

        render() {
            return <InnerComponent {...this.props} propsTambahan="Ini dari HOC" />;
        }
    }

    return WrapperComponent;
}