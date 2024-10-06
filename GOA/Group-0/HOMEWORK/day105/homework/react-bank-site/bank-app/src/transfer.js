export const transferFunds = (accounts, fromIndex, toIndex, amount) => {
    if (fromIndex === toIndex) {
        return { success: false, message: "Can't transfer to the same account." };
    }
    if (amount <= 0) {
        return { success: false, message: "Transfer amount must be greater than zero." };
    }
    if (accounts[fromIndex].balance < amount) {
        return { success: false, message: "Insufficient funds." };
    }

    const newAccounts = [...accounts];
    newAccounts[fromIndex].balance -= amount;
    newAccounts[toIndex].balance += amount;

    return { success: true, accounts: newAccounts };
};
