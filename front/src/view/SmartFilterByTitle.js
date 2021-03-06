import React, { Component } from "react";
import model from "../model/model";

import FilterByTitle from "./FilterByTitle";
import QuestionsListPresenter from "../presenter/QuestionsListPresenter"


const mapModelStateToComponentState = modelState => ({
    searchQuestions:modelState.searchQuestions
});

export default class SmartFilterByTitle extends Component {
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
            <FilterByTitle
               questions={this.state.searchQuestions}
               onViewDetails={QuestionsListPresenter.onViewDetails}
               />
        );
    }
}