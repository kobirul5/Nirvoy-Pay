import React, { useState } from 'react';

const SendMoney = () => {
    const [amount, setAmount] = useState('');
    const [recipientNumber, setRecipientNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount && recipientNumber) {
            alert('Money Sent Successfully!');
        } else {
            alert('Please fill out all fields.');
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="p-8 rounded-2xl w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Money</h2>
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
                            Recipient's Mobile Number
                        </label>
                        <input
                            type="text"
                            value={recipientNumber}
                            onChange={(e) => setRecipientNumber(e.target.value)}
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-blue-400"
                            placeholder="Enter recipient's number"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition duration-300"
                    >
                        Confirm Send Money
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SendMoney;
