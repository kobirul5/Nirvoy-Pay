import React, { useState } from 'react';

const CashIn = () => {
    const [amount, setAmount] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount && mobileNumber) {
            alert('Cash In Successful!');
        } else {
            alert('Please fill out all fields.');
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Cash In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2">Amount</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-primary-color"
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
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-primary-color"
                            placeholder="Enter mobile number"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition duration-300"
                    >
                        Confirm Cash In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CashIn;
