import React from "react";

const CreateQuestion = ({ author,title,text,creationDate,tag, onCreate, onChange }) => (
    <div>
    <section className="hero is-link is-fullheight"> 
    <div className="hero-body">
      <div className="container ">
        <a className="button is-danger is-outlined"
          onClick={onCreate}>Create
 </a>
 
        <div>
    

<article className="title is-child">
<div className="title is-ancestor">
        <div className="title is-vertical is-parent ">

            <input
                    className="input is-danger is-focused" type="author" placeholder="Author"
                    value={author} onChange={ e => onChange("author", e.target.value)  }/>
            <br />
                <input
                    className="input is-danger is-focused" type="text" placeholder="Title"
                    value={title} onChange={ e => onChange("title", e.target.value)  }/>
         <br/>
   
                <input
                    className="input is-danger is-focused" type="text" placeholder="Text"
                    value={text} onChange={e => onChange("text", e.target.value)}/>
            
            <br/>
   
                <input
                    className="input is-danger is-focused" type="creationDate" placeholder="Creation Date"
                    value={creationDate} onChange={ e => onChange("creationDate", e.target.value)  }/>
        
     
        <br/>
   
         
                <input
                    className="input is-danger is-focused" type="tag" placeholder="Tag"
                    value={tag} onChange={ e => onChange("tag", e.target.value)  }/>
        </div>
</div>
    
  </article>
   </div>
   </div>
   </div>
    </section>
    </div>
);

export default CreateQuestion;