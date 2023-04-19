import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTransations } from '../../features/tranaction/transactionSlice';
import Transaction from './Transaction';

const Transactions = () => {
  const dispatch = useDispatch();
  const { transactions, isLoading, isError } = useSelector((state) => state.transaction);

  useEffect(() => {
    dispatch(fetchTransations());
  }, [dispatch])

  // decide what to render
  let content = null;
  if (isLoading) content = <p> Loading ...</p>;
  if (!isLoading && isError) content = <p> Something went wrong</p>;
  if (!isLoading && !isError && transactions?.length === 0) {
    content = <p>No transaction found !!</p>
  }
  if (!isLoading && !isError && transactions?.length > 0) {
    content = transactions.map((transaction) => (
      <Transaction key={transaction.id} transaction={transaction} />
    ))
  }

  return (
    <>
      <p className="second_heading">Your Transactions:</p>
      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  )
}

export default Transactions