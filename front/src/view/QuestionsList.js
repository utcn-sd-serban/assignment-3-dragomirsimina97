import React from "react";

const QuestionsList = ({ questions,onCreateQuestion, onViewDetails ,searchQuestionsTitle,searchQuestionsTag,onChangeToSearch}) => (
    <div>
      <section className="hero is-link is-fullheight ">
      <div className="hero-body">
      <div className="container ">
        <p className="title ">Questions </p>
        <a className="button is-danger is-outlined is-left"
          onClick={onCreateQuestion}>Create Question
 </a>
 <input onChange={e =>onChangeToSearch("toSearch",e.target.value)}></input>
                <a className="button is-danger is-outlined " onClick={searchQuestionsTitle}>
    
                    Title
                </a>
                
 <input onChange={e =>onChangeToSearch("toSearch",e.target.value)}></input>
                <a className="button is-danger is-outlined" onClick={searchQuestionsTag}>
    
                    Tag
                </a>
               
 </div>


                
    <div className="table is-striped is-bordered is-link is-vertical ">
<thead>
    <tr>
        <th>Author </th>
        <th>Title</th>
        <th>Text</th>
        <th>CreationDate</th>
        <th>Tag</th>
    </tr>
</thead>
            <tbody>
                {
                    questions.map((question, index) => (
                        <tr key={index}> <td>
                           {question.author}</td>
                            <td>{question.title}</td>
                            <td>{question.text}</td>
                            <td>{question.creationDate}</td>
                            <td>{question.tag}</td>
                            <td><a onClick={() => onViewDetails(index)} class="button is-danger is-outlined">View Details</a></td> 
                           
                        </tr>
                    ))
                }
            </tbody>
    </div>
      
        
        </div> 
                
        </section>
    </div>
);

export default QuestionsList;