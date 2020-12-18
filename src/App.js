import {connect} from "react-redux";
import Counter from "./Counter";

// Сопоставление состояния Redux со свойствами компонента
function mapStateToProps(state) {
	return {
		countValue: state.count
	};
}

// Action
const increaseAction = {type: "increase"};
const decreaseAction = {type: "descrease"};

// Сопоставление действий Redux со свойствами компонента
function mapDispatchToProps(dispatch) {
	return {
		increaseCount: function () {
			return dispatch(increaseAction);
		},
		descreaseCount: function () {
			return dispatch(decreaseAction);
		}
	};
}

// HOC component
const connectedComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);

export default connectedComponent;