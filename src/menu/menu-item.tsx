import React, {Component} from "react";
import './menu-item.scss';

export class MenuItemComponent extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="menu-item">
                {children}
            </div>
        )
    }
}