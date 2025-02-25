import React, { useState } from 'react';

const CashOut = () => {
    const [amount, setAmount] = useState('');
    const [accountDetails, setAccountDetails] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount && accountDetails) {
            alert('Cash Out Successful!');
        } else {
            alert('Please fill out all fields.');
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className=" p-8 rounded-2xl  w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Cash Out</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2">Amount</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-blue-400"
                            placeholder="Enter amount"
                            required
                        />
                    </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-2">
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                value={accountDetails}
                                onChange={(e) => setAccountDetails(e.target.value)}
                                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-blue-400"
                                placeholder="Enter mobile  number"
                                required
                            />
                        </div>
                    <button
                        type="submit"
                        className="w-full bg-primary-color text-white py-2 rounded-xl hover:bg-primary-color transition duration-300"
                    >
                        Confirm Cash Out
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CashOut;
