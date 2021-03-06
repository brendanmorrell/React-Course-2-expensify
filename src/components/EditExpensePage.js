import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);// here and below we can use props.match or props.expense since they are both being sent into the EditExpensePage component
    this. props.history.push('/');
  };
  onRemove = () => {
    this.props.removeExpense(this.props.expense.id);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
          buttonContent="Submit Edit"
        />
        <button
          onClick={this.onRemove}
        >Remove
        </button>
      </div>
    );
  };
};

const mapStateToProps = (state, props) => ({expense: state.expenses.find((expense) => expense.id === props.match.params.id)});

const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (id) => dispatch(removeExpense(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
