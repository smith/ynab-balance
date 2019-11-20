const ynab = require("ynab");
const accessToken = process.env.YNAB_ACCESS_TOKEN;
const ynabAPI = new ynab.API(accessToken);
const budgetId = "006e992f-03a5-4b60-9fe8-6c3f427bae0e";
const accoundId = "89ab92fe-9dc0-4c8e-8c42-83968456b102";

export default async (_, res) => {
  const accountBalanceResponse = await ynabAPI.accounts.getAccountById(
    budgetId,
    accoundId
  );
  const balance = accountBalanceResponse.data.account.balance / 1000;
  res.json(balance);
};
