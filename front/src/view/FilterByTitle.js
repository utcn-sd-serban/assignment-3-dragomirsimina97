import React from "react";

const FilterByTitle= ({ questions}) => (
    <div>
    <section className="hero  is-link is-fullheight ">
    <div className="hero-body">
    <div className="container ">
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
                           
                           
                        </tr>
                    ))
                }
            </tbody>
            
            </div>
            </div>
            </div>
            </section>
            </div>
   
);

export default FilterByTitle;