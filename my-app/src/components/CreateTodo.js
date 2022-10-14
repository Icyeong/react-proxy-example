import React from 'react';


const CreateTodo = ({ onChangeForm, todoSubmit }) => {


    return (
        <div className="form-wrapper">
            <div className="form">
                <form>
                    <div className="input-group">
                        <label>todo</label>
                        <input
                            type="text"
                            onChange={(e) => onChangeForm(e)}
                            name="todo"
                            placeholder="todo"
                        />
                    </div>
                    <div className="input-group">
                        <label>category</label>
                        <input
                            type="text"
                            onChange={(e) => onChangeForm(e)}
                            name="category"
                            placeholder="category"
                        />
                    </div>
                    <div className="input-group">
                        <label>Complete</label>
                        <input
                            type="text"
                            onChange={(e) => onChangeForm(e)}
                            name="complete"
                            placeholder="yes / no"
                        />
                    </div>
                    <button
                        className="submit-button"
                        onClick={() => todoSubmit()}
                    >Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateTodo;