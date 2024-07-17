const { Query, QueryData } = require('./query');
const { BoolFunc } = require('./types');

function query() {
  const sqlQuery = new Query();
  return {
    select: selector => (sqlQuery.select(selector), this),
    from: data => (sqlQuery.from(data), this),
    where: whereFunc => (sqlQuery.where(whereFunc), this),
    execute: () => sqlQuery.call()
  };
}

console.log(
  query()
    .where(() => {})
    .from([1, 2])
    .select(d => d * 2)
    .execute()
);
