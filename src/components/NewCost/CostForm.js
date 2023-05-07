import React, { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {

    const [inputName, setInputName] = useState("");
    const [inputAmount, setInputAmount] = useState("");
    const [inputDate, setInputDate] = useState("");

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
        };

        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Name:</label>
                    <input value={inputName} onChange={nameChangeHandler} type="text" />
                </div>
                <div className="new-cost__control">
                    <label>Sum:</label>
                    <input value={inputAmount} onChange={amountChangeHandler} type="number" min='0.01' step='0.01' />
                </div>
                <div className="new-cost__control">
                    <label>Date:</label>
                    <input value={inputDate} onChange={dateChangeHandler} type="date" min='2019-01-01' step='2023-12-31' />
                </div>
                <div className="new-cost__action">
                    <button type='submit'>Add Expense</button>
                </div>
                <div className="new-cost__action">
                    <button type='button' onClick={props.onCancel}>Cancel</button>
                </div>
            </div>
        </form>
    );
};

export default CostForm;