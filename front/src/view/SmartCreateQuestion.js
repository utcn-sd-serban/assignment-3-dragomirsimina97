import React, { Component } from "react";
import model from "../model/model";

import CreateQuestion from "./CreateQuestion";
import createQuestionPresenter from "../presenter/createQuestionPresenter";

const mapModelStateToComponentState = modelState => ({
    author: modelState.newQuestion.author,
    title: modelState.newQuestion.title,
    text: modelState.newQuestion.text,
    creationDate: modelState.newQuestion.creationDate,
    tag: modelState.newQuestion.tag
});

export default class SmartCreateQuestion extends Component {
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
            <CreateQuestion
                onCreate={createQuestionPresenter.onCreate}
                onChange={createQuestionPresenter.onChange}
               author={this.state.author}
               title={this.state.title}
               text={this.state.text}
               creationDate={this.state.creationDate}
               tag={this.state.tag} />
        );
    }
}