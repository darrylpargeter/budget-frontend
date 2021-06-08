const BudgetQuery = `
  query {
    incomes {
      total
      incomes {
        label
        value
      }
    }
    tags {
      label
      id
    }
  }
`;

const StreamQuery = `
  query ($month: Int!, $year: Int!, $filter: [Int]) {
    streams(month: $month, year: $year, filter: $filter) {
      label
      total
      percent
      tag {
        id
      }
      items {
        label
        price(month: $month, year: $year)
      }
    }
  }
`;

export { 
  BudgetQuery,
  StreamQuery,
};
