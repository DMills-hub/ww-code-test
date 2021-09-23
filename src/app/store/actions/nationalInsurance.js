export const CHANGE_INCOME = "CHANGE_INCOME";

export const changeIncome = (income) => {
  return {
    type: CHANGE_INCOME,
    payload: {
      income,
    },
  };
};
