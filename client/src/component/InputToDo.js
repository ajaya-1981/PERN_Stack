import React, {Fragment, useState} from 'react';

const InputTodo = () => {
    const [description, setDescription] = useState("");
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {description};
            const response =await fetch( "http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-type" : "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }
    return <h1>
       <Fragment>
           <h1 className="text-center mt-5" onSubmit={onSubmitForm} > Pern Todo List
            <form className="d-flex mt-5" >
                <input type="text" className="form-control" onChange= {e => setDescription(e.target.value)} value = {description} ></input>
                <button className="btn btn-success"  > Add</button>
            </form>
           </h1>
       </Fragment>
    </h1>
};
export default InputTodo ;