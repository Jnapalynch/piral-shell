import React, {Component} from "react";
import './menu-container.scss';

export class MenuContainerComponent extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="menu-container p-4">
                {children}
            </div>
        )
    }
}