import React, { Component } from "react";
import model from "../model/model";

import FilterByTag from "./FilterByTag";


const mapModelStateToComponentState = modelState => ({
    searchQuestions:modelState.searchQuestions
});

export default class SmartFilterByTag extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <FilterByTag
               questions={this.state.searchQuestions}/>
        );
    }
}