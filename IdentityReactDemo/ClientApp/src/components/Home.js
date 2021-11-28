import { useAuthContext } from "../providers/AuthProvider";
import { Button } from 'reactstrap';

export const Home = () => {
    const [{ userManager, accessToken }] = useAuthContext();
    return (
        <div className="text-center">
            {accessToken
                ? <Button color="danger" onClick={() => { userManager.signoutRedirect() }} >Odhl�sit</Button>
                : <Button color="success" onClick={() => { userManager.signinRedirect() }} >P�ihl�sit</Button>
            }
        </div>
    );
}

export default Home;