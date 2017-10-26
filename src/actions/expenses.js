import uuid from 'uuid';// random id generater module
// ADD_EXPENSE
export const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
    key = Math.random(),
  } = {},
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
    key,
  },
});

// REMOVE_EXPENSE
export const removeExpense = id => ({
  type: 'REMOVE_EXPENSE',
  id,
});
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});