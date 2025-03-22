/* eslint-disable no-unused-vars */
import React from "react";

export const withBackground = (InnerComponent) => {
    class WrapperComponent extends React.Component {
        render() {
            return <div className="bg-gray-500 p-4">
                <InnerComponent {...this.props} />
            </div>
        }
    }

    return WrapperComponent;
}