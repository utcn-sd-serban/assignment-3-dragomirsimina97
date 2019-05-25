import model from "../model/model";


class CreateQuestionPresenter {

    onCreate() {
        model.addQuestion(model.state.newQuestion.author, model.state.newQuestion.title, model.state.newQuestion.text, model.state.newQuestion.creationDate, model.state.newQuestion.tag)
        .then(() => {
            model.changeNewQuestionProperty("author", "");
            model.changeNewQuestionProperty("title", "");
            model.changeNewQuestionProperty("text", "");
            model.changeNewQuestionProperty("creationDate", "");
            model.changeNewQuestionProperty("tag", "");
            window.location.assign("#/");
        });
       
    }

    onChange(property, value) {
        model.changeNewQuestionProperty(property, value);
    }

}

const createQuestionPresenter = new CreateQuestionPresenter();


export default createQuestionPresenter;