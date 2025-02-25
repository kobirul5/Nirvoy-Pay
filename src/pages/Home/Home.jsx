import { Link } from "react-router-dom";
import useVerifiedAgent from "../../hooks/useVerifiedAgent";
import useVerifiedUser from "../../hooks/useVerifiedUser";
import useVerifyAdmin from "../../hooks/useVerifyAdmin";

const Home = () => {
    const [verifiedUser] = useVerifiedUser()
    const [verifiedAdmin] = useVerifiedAgent()
    const [verifiedAgent] = useVerifyAdmin()
    

    return (
        <div className=" grid grid-cols-3 pt-20 gap-5  px-4">
            {/* 3 type */}
                <Link  className="btn" >Balance Inquiry</Link>
                <Link className="btn" >Transition</Link>

            {/* user */}
                <Link to="/send-money" className="btn" >Send Money</Link>
                <Link to="/cash-out" className="btn" >Cash Out</Link>

            {/* agent */}
                <Link to="/cash-in" className="btn" >Cash In</Link>
                <Link to="/cash-request" className="btn" >Cash Request</Link>
                <Link to="/withdraw-request" className="btn" >Withdraw Request</Link>

            {/* admin */}
                <Link className="btn" >User Management</Link>
                <Link className="btn" >Agent Approval</Link>
                <Link className="btn" >Withdraw Approval</Link>

        </div>
    );
};

export default Home;