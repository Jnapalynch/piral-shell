import React, {Component} from 'react';
import './loading-component.scss';

export class LoadingComponent extends Component {

    renderOverlay() {
        return <div className="overlay" />
    }

    renderLoader() {
        return (
            <div className="loader-wrapper">
                <img alt="" src="https://piral-demo.s3.amazonaws.com/loader-piral.gif" />
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderOverlay()}
                {this.renderLoader()}
            </div>
        );
    }
}