import { Wrapper } from "../Components/Wrapper/Wrapper";
import '../Styles/main.sass';
import React from 'react'

const Promarket = ({ Component, pageProps }) => (
	<Wrapper>
		<Component {...pageProps} />
	</Wrapper>
);

export default Promarket;
