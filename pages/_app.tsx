import { Wrapper } from "../Components/Wrapper/Wrapper";
import '../Styles/main.sass';
import React from 'react'
import { useRouter } from "next/router";

const Promarket = ({ Component, pageProps }) => {

	const router = useRouter();
	let title = "Promarket";

	switch (router.pathname) {
		case "/article":
			title += "- Article";
			break;
		case "/articles":
			title += "- Articles";
			break;
		case "/authorization":
			title += "- Authorization";
			break;
		case "/basket":
			title += "- Basket";
			break;
		case "/brands":
			title += "- Brands";
			break;
		case "/contacts":
			title += "- Contacts";
			break;
		case "/delivery":
			title += "- Delivery";
			break;
		case "/likes":
			title += "- Likes";
			break;
		case "/payment":
			title += "- Payment";
			break;
		case "/product":
			title += "- Product";
			break;
		case "/profile":
			title += "- Profile";
			break;
		case "/providers":
			title += "- Providers";
			break;
		case "/search":
			title += "- Search";
			break;
		case "/stonks":
			title += "- Stonks";
			break;
		default:
			break;
	}

	return (
		<Wrapper title={title}>
			<Component {...pageProps} />
		</Wrapper>
	)
};

export default Promarket;
