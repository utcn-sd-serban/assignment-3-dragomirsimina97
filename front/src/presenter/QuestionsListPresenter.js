import model from "../model/model";

class QuestionsListPresenter {
    onCreateQuestion() {
        window.location.assign("#/create-question");
    }

    onViewDetails(index) {
        window.location.assign("#/question-details/" + index);
    }
    onFilterQuestionsTitle()
    {
        model.findByTitle();
        window.location.assign("#/filter-title-question");
    }
    onFilterQuestionsTag()
    {
        model.findByTag();
        window.location.assign("#/filter-tag-question");
    }
    changeToSearch(property, value){
      model.changeToSearch(property, value);

    }
    onInit() {
        model.loadQuestions();
    }
    
}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;