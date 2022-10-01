import { Provider } from "../Components/Context/Context";
import { Wrapper } from "../Components/Wrapper/Wrapper";
import '../Styles/main.sass';

const Promarket = ({ Component, pageProps }) => (
	<Provider>
		<Wrapper>
			<Component {...pageProps} />
		</Wrapper>
	</Provider>
);

export default Promarket;
