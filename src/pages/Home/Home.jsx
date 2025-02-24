import useVerifiedAgent from "../../hooks/useVerifiedAgent";
import useVerifiedUser from "../../hooks/useVerifiedUser";
import useVerifyAdmin from "../../hooks/useVerifyAdmin";

const Home = () => {
    const [verifiedUser] = useVerifiedUser()
    const [verifiedAdmin] = useVerifiedAgent()
    const [verifiedAgent] = useVerifyAdmin()
    console.log(verifiedUser, verifiedAdmin, verifiedAgent)

    return (
        <div>
            <div>3 type</div>
            <div>user</div>
            <div>Admin</div>
            <div>Agent</div>
        </div>
    );
};

export default Home;