const BASE_URL = "http://localhost:8080";

export default class RestClient {
    constructor(username, password) {
        this.authorization = "Basic " + btoa(username + ":" + password);
    }

    loadAllQuestions() {
        return fetch(BASE_URL + "/questions", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }

    createQuestion(author,title,text,creationDate,tag) {
        return fetch(BASE_URL + "/questions", {
            method: "POST",
            body: JSON.stringify({
                author:author,
                title:title,
                text:text,
                creationDate:creationDate,
                tag:tag
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }


    filterQuestionByTitle(title)
    {
        return fetch (BASE_URL + "/questions/title/" + title, {
            method: "GET",
            headers:{
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }
}