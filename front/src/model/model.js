import { EventEmitter } from "events";
import RestClient from "../rest/RestClient";


const client = new RestClient("serban", "password");
class Model extends EventEmitter {
    constructor() {
        super();
        this.state = {
            questions: [{
              id:1,
                author:"Ana",
                title:"SQL problem",
                text:"Connection problem",
                creationDate:"11/02/2019",
                tag:"SQL"
            }, {
                id:2,
                author:"Mara",
                title:"Linux problem",
                text:"Random error",
                creationDate:"18/02/2019",
                tag:"LINUX"
            }],
            newQuestion: {
               id:"",
                author:"",
                title:"",
                text:"",
                creationDate:"",
                tag:""
            },
            searchQuestions:{},
            toSearch:"",
            currentId:2
            
        };
    }
    loadQuestions()
    {
        return client.loadAllQuestions().then(questions => {
            this.state = { 
                ...this.state, 
                questions:questions
            };
            this.emit("change", this.state);
        })
    }

    addQuestion(author,title,text,creationDate,tag) {

        return client.createQuestion(author,title,text,creationDate,tag)
        .then(question=> {this.state = {
            ...this.state,
            currentId:++this.state.currentId,
            questions: this.state.questions.concat([{
             id:this.state.currentId,  
              author:author,
               title:title,
               text:text,
               creationDate:creationDate,
               tag:tag
            }])
        };
        this.emit("change", this.state);
       
    })}
  
    changeNewQuestionProperty(property, value) {
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state. newQuestion,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }
    findByTitle(){ 
        debugger;
        const result=this.state.questions.filter(post=>post.title===this.state.toSearch)
        this.state = {
     ...this.state,
     searchQuestions:result
        };
 }
 changeToSearch(property, value) {
    this.state = {
        ...this.state,
       [property]:value
    };
    this.emit("change", this.state);
}
findByTag(){ 
    debugger;
    const result=this.state.questions.filter(post=>post.tag===this.state.toSearch)
    this.state = {
 ...this.state,
 searchQuestions:result
    };
}
    
}

const model = new Model();

export default model;