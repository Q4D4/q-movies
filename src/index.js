import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// COMPONENTS
import App from './App';
// CONTEXT PROVIDER
import { AppProvider } from './context';
// GLOBAL STYLES
import './styles/index.css';
import './styles/theme.css';
// FONTS
import 'bpg-mrgvlovani-caps/css/bpg-mrgvlovani-caps.min.css';
import 'bpg-mrgvlovani/css/bpg-mrgvlovani.min.css';

render (
	<Router>
		<AppProvider>
			<App />
		</AppProvider>
	</Router>,
	document.getElementById('root')
);