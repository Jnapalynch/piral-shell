import React, {Component, ComponentState} from "react";
import {LoadingComponent} from "./loading/loading-component";
import {MenuItemComponent} from "./menu/menu-item";
import {MenuContainerComponent} from "./menu/menu-container";
import {Menu} from "piral";

export class LayoutComponent extends Component {

    renderMenu() {
        return <Menu type="general" />
    }

    renderContainer() {
        return this.props.children;
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 pl-0">
                        {this.renderMenu()}
                    </div>
                    <div className="col-9 pt-4 d-flex align-items-baseline">
                        {this.renderContainer()}
                    </div>
                </div>
            </div>
        )
    }
}

export const layout: Partial<ComponentState> = {
    Layout: LayoutComponent,
    LoadingIndicator: LoadingComponent,
    MenuContainer: MenuContainerComponent,
    MenuItem: MenuItemComponent
};
