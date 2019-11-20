import React, { useEffect, useState } from "react";
import Head from "../components/head";

const Home = () => {
  const [budgetBalance, setBudgetBalance] = useState(undefined);
  const [accountBalance, setAccountBalance] = useState(undefined);

  useEffect(() => {
    async function getBudgetBalance() {
      const res = await fetch("/api/budget");
      const balance = await res.json();
      setBudgetBalance(balance.toFixed(2));
    }
    getBudgetBalance();

    async function getAccountBalance() {
      const res = await fetch("/api/account");
      const balance = await res.json();
      setAccountBalance(balance.toFixed(2));
    }
    getAccountBalance();
  }, []);

  return (
    <>
      <Head title="Balances" />
      <main>
        {budgetBalance && (
          <>
            <h1>Budgeted cash balance</h1>
            <h2 className="budgetBalance">${budgetBalance}</h2>
          </>
        )}
        {accountBalance && (
          <>
            <h1>Ally balance</h1>
            <h2 className="accountBalance">${accountBalance}</h2>
          </>
        )}
        <a
          title="You Need a Budget"
          href="https://app.youneedabudget.com/006e992f-03a5-4b60-9fe8-6c3f427bae0e/budget"
        >
          YNAB
        </a>
      </main>
      <style jsx>{`
        font-family: Lato, Helvetica Neue, Helvetica, Arial, sans-serif;
        text-align: center;

        h1,
        h2 {
          font-weight: normal;
        }

        h1 {
          font-size: 100%;
        }

        h2 {
          display: inline;
          font-size: 300%;
        }

        .budgetBalance {
          background-color: #c4ecbb;
          border-radius: 2rem;
          color: #1d4913;
          padding: 0.5rem 1.75rem;
        }

        a,
        a:visited {
          display: block;
          text-decoration: none;
          color: #009cc2;
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
};

export default Home;
