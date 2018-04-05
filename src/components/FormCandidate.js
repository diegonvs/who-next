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

export {FormCandidate};
export default FormCandidate;
