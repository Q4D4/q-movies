import { render } from 'react-dom';
import App from './App';
// CONTEXT PROVIDER
import { AppProvider } from './context';
// GLOBAL STYLES
import './styles/index.css';
import './styles/theme.css';

render (
	<AppProvider>
		<App />
	</AppProvider>,
	document.getElementById('root')
);