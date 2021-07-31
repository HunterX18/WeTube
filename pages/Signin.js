import { signIn } from "next-auth/client";
import Image from "next/image"
import Google from '../public/icons/google.png'

const Signin = () => {
	return (
		<div
			className="card d-flex  m-auto mt-5 pt-5 justfiy-content-center align-items-center"
			style={{ background: "#f8f9fa", width: "30vw", height: "50vh" }}
		>
			<h3 style={{  marginBottom: "5rem" }}>sign in to continue</h3>
			<Image src={Google} width="70rem" height="70rem"/>
			<button className="btn btn-primary mt-5">
				<a
					href={`/api/auth/signin`}
					onClick={(e) => {
						e.preventDefault();
						signIn("google", { callbackUrl: "http://localhost:3000/" });
					}}
					style={{ textDecoration: "none", color: "white" }}
				>
					Sign in
				</a>
			</button>
		</div>
	);
};

export default Signin;
