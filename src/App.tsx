import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './containers/Layout';

import { store } from './store';

export const App: React.FC = () => <Layout />;
