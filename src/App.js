import React, { Component } from 'react';
import { connect } from "react-redux";

import { func, array } from "prop-types";
import { ToastContainer } from 'react-toastify';

import { LoaderContainer } from "./components/Loader/Loader";

import Headers from "./components/Headers/Headers";
import UnderHeaderImage from "./components/UnderHeaderImage/UnderHeaderImage";
import Products from "./components/Products/Products";
import Video from "./components/Video/Video";
import AdvantageOfOurCompany from "./components/AdvantageOfOurCompany/AdvantageOfOurCompany";
import ConditionOfDelivery from "./components/ConditionOfDelivery/ConditionOfDelivery";
import UserReviews from "./components/UserReviews/UserReviews";
import UserReviewsForm from "./components/UserReviewsForm/UserReviewsForm";
import ConnectWithUs from "./components/ConnectWithUs/ConnectWithUs";
import Basket from "./components/Basket/Basket";

import * as producActions from "./modules/product/product.actions";
import * as commentsActions from "./modules/comment/comment.actions";
import 'react-toastify/dist/ReactToastify.css';

import classes from './App.less'

class App extends Component {
	static propTypes = {
		getAllProductSaga: func,
		getAllCommentsSaga: func,
		saveCommentSage: func,
		comments: array,
	}

    state = {
        contactRef: null
    }

    componentDidMount() {
    	this.props.getAllProductSaga();
    	this.props.getAllCommentsSaga();
	}

	handleScrollToElement = (event) => {

	    window.scrollTo({ top: this.state.contactRef.offsetTop, behavior: 'smooth' });
	}


	setRef = (element) => {
	   this.setState({
		   contactRef: element
       })
    }


    render() {
		const { products } = this.props;

        return (
            <div className={classes.app}>
				<ToastContainer />
				<LoaderContainer />
				<Basket />
                <Headers handleScrollToElement={this.handleScrollToElement} />
                <UnderHeaderImage />
                <Products products={products} />
                <Video />
                <AdvantageOfOurCompany />
                <ConditionOfDelivery />
				<UserReviews comments={this.props.comments} />
				<UserReviewsForm saveComment={this.props.saveCommentSage} />
                <ConnectWithUs setRef={this.setRef} />
            </div>
    );
  }
}

function mapStateToProps({ product, comment }) {
	return {
		products: product.products,
		comments: comment.comments,

	};
}

export default connect(mapStateToProps, { ...producActions, ...commentsActions })(App);
