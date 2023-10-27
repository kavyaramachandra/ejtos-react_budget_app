import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (e) => {
        setNewBudget(e.target.value);
    }
    return (
<div className='alert alert-secondary'>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
<span>Budget: £{newBudget}</span>
</div>
    );
};
export default Budget;
