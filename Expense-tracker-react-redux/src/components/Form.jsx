import React from 'react'

const Form = () => {
  return (
    <div className="form">
    <h3>Add new transaction</h3>

    <form >
        <div className="form-group">
            <label>Name</label>
            <input
                type="text"
                name="name"
                required
                placeholder="enter title"
                value=""
                
            />
        </div>

        <div className="form-group radio">
            <label>Type</label>
            <div className="radio_group">
                <input
                    required
                    type="radio"
                    value="income"
                    name="type"
                    checked="false"
                />
                <label>Income</label>
            </div>
            <div className="radio_group">
                <input
                    type="radio"
                    value="expense"
                    name="type"
                    placeholder="Expense"
                    checked=""
                />
                <label>Expense</label>
            </div>
        </div>

        <div className="form-group">
            <label>Amount</label>
            <input
                type="number"
                required
                placeholder="enter amount"
                name="amount"
                value=""
            />
        </div>

        <button  className="btn" type="submit">
             "Update Transaction Add Transaction"
        </button>

    
            {/* <p className="error">There was an error occured</p> */}
     
    </form>

 
        <button className="btn cancel_edit" >
            Cancel Edit
        </button>

</div>
  )
}

export default Form