import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import CashOut from "../pages/User/CashOut";
import SendMoney from "../pages/User/SendMoney";
import CashIn from "../pages/Agent/CashIn";
import CashRequest from "../pages/Agent/CashRequest";
import WithdrawRequest from "../pages/Agent/WithdrawRequest";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cash-out',
                element: <CashOut/>
            },
            {
                path: '/send-money',
                element: <SendMoney/>
            },
            // agent path
            {
                path: '/cash-in',
                element: <CashIn/>
            },
            {
                path: '/cash-request',
                element: <CashRequest/>
            },
            {
                path: '/withdraw-request',
                element: <WithdrawRequest/>
            },
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            }
        ]
    },
]);