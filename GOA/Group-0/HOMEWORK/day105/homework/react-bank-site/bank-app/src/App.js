import React, { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import AccountForm from './AccountForm';
import { transferFunds } from './transfer';

const App = () => {
    const [accounts, setAccounts] = useState([]);

    const handleTransfer = (fromIndex, toIndex, amount) => {
        const result = transferFunds(accounts, fromIndex, toIndex, amount);
        if (result.success) {
            setAccounts(result.accounts);
        } else {
            alert(result.message);
        }
    };

    return (
        <div>
            <Header />
            <Navbar />
            <AccountForm accounts={accounts} setAccounts={setAccounts} />
        </div>
    );
};

export default App;
