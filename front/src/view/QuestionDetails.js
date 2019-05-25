import React from "react";

const QuestionDetails = ({ author,title,text,creationDate,tag }) => (
    <div>
        <section className="hero is-link is-fullheight">
        <div className="hero-body">
      <div className="container ">


    <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent ">


            <p className="tag is-danger is-large ">Question</p>

            <p className="tag is-succes is-large ">Author:</p>
            <span className="tag is-warning"> { author }</span>
            <br />
            <p className="tag is-succes is-large">Title:</p>
            <span className="tag is-warning"> { title}</span>
            <br />
            <p className="tag is-succes is-large">CreationDate:</p>
            <span className="tag is-warning"> { creationDate }</span>
            <br />
            <p className="tag is-succes is-large">Text:</p>
            <span className="tag is-warning"> { text }</span>
             <br />
             <p className="tag is-succes is-large">Tag:</p>
            <span className="tag is-warning "> { tag }</span>
            <br />
        </div>
                    </div>

                </div>
            </div>

        </section>
    </div>
);

export default QuestionDetails;