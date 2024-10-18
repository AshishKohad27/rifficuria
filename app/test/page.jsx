"use client";
import { useEffect } from "react";
import { increment, decrement, login, logout } from "@/redux/test/test-slice"; // Import login and logout actions
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Header from "@/components/site/site-header";

export default function Counter() {
    const { value, data, loading, error, isAuth } = useAppSelector((state) => state.test);
    const dispatch = useAppDispatch();

    useEffect(() => {
        // Uncomment for debugging
        console.log("isAuth:", isAuth);
        // console.log("loading:", loading);
    }, [loading, error, data, isAuth]);

    const handleIncrement = () => {
        console.log("Increment");
        dispatch(increment());
    };

    const handleDecrement = () => {
        console.log("Decrement");
        dispatch(decrement());
    };

    const handleLogin = () => {
        console.log("Logging in");
        dispatch(login()); // Trigger login action
    };

    const handleLogout = () => {
        console.log("Logging out");
        dispatch(logout()); // Trigger logout action
    };

    if (loading) {
        return <h1 className="text-center text-2xl">Loading...</h1>;
    } else if (error) {
        return <h1 className="text-center text-red-600">Error</h1>;
    }

    return (
        <>
            <Header />
            <div className="flex flex-col items-center p-4">
                <h1 className="text-2xl font-bold mb-4">Counter</h1>
                <div className="flex items-center mb-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        onClick={handleIncrement}
                    >
                        +
                    </button>
                    <span className="text-xl">{value}</span>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                        onClick={handleDecrement}
                    >
                        -
                    </button>
                </div>
                <div className="mb-4">
                    {data &&
                        data.map((item, index) => (
                            <div key={index}>
                                <h2 className="text-lg">
                                    {index + 1}. {item.question}
                                </h2>
                            </div>
                        ))}
                </div>
                <div className="flex space-x-4">
                    {!isAuth ? (
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
