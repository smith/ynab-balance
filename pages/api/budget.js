const ynab = require("ynab");
const accessToken = process.env.YNAB_ACCESS_TOKEN;
const ynabAPI = new ynab.API(accessToken);
const budgetId = "006e992f-03a5-4b60-9fe8-6c3f427bae0e";
const budgetCategoryId = "d2d05f54-aa99-4fb3-9f93-7bebfd28a5f5";

export default async (_, res) => {
  const categoryResponse = await ynabAPI.categories.getCategoryById(
    budgetId,
    budgetCategoryId
  );
  const balance = categoryResponse.data.category.balance / 1000;
  res.json(balance);
};
