import './ExpenseItem.css';


function ExpensItem() {
  return (
    <div className='expense-item'>
      <div >Date</div>
      <div className='expense-item__descripton'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>$245.6</div>
      </div>
    </div>
  );
}

export default ExpensItem;
