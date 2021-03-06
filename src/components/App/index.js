import { Component } from 'preact';
import { Router } from 'preact-router';

import Home from 'async!@pages/Home';
import style from './index.css';

export default class App extends Component {
	onRoute = e => {
		if (process.env.NODE_ENV === 'production') {
			if (!!e.previous && window.ga) {
				ga.send('pageview');
			}
		}
	}

	render() {
		return (
			<div class={ style.app }>

				<main class={ style.wrapper }>
					<Router onChange={ this.onRoute }>
						<Home path="/" />
					</Router>
				</main>
			</div>
		);
	}
}
