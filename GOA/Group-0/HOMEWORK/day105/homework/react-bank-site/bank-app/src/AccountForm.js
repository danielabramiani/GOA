import React, { useState } from 'react';

const AccountForm = ({ accounts, setAccounts }) => {
    const [name, setName] = useState('');
    const [balance, setBalance] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAccount = { name, balance: parseFloat(balance) };
        setAccounts([...accounts, newAccount]);
        setName('');
        setBalance('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Account Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Initial Balance"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                required
            />
            <button type="submit">Create Account</button>
        </form>
    );
};

export default AccountForm;
