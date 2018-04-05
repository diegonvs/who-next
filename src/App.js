import Component, {Config} from 'metal-jsx';

import './css/main.scss';

const FormCandidate = ({ onKeyUpFn, onSubmitFn, value }) => {
	return (
		<form class="form-candidate" onSubmit={onSubmitFn}>
			<article>
				<label htmlFor="">HTML Score</label>
				<input type="text" onKeyUp={onKeyUpFn} value={value} />
				<div class="step"></div>
			</article>
		</form>
	);
};

class App extends Component {
	
	handleSubmit(e){
		e.preventDefault();

		this.state.currentValue = "";
	}
	
	handleKeyUp(e){
			this.state.currentValue = e.target.value;
	}
	
	render() {
		return (
			<div id="app">
				<header class="header">
					<h1>Front End Engineering Test</h1>
					<h2>List of candidates results in the frontend liferay test</h2>
				</header>
				
				<section>
					<FormCandidate onSubmitFn={this.handleSubmit.bind(this)} value={this.state.currentValue} onKeyUpFn={this.handleKeyUp.bind(this)} />
				</section>
			</div>
		)
	}
}


App.STATE = {
	/**
	 * @type {boolean}
	 * @default false
	 */
	currentValue: Config.string()
};

export { App };
export default App;
