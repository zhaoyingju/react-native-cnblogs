import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableHighlight
} from 'react-native';

import moment from 'moment';
import _ from 'lodash';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { decodeHTML }  from '../../common';
import { CommonStyles, ComponentStyles, StyleConfig } from '../../style';

class QuesRow extends Component {

	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	getPostInfo(){
		
	}

	renderPostRowMetas(postInfo){
		
	}

	render() {
		return (
			<Text>
                ques row
            </Text>
		)
	}
}

export default QuesRow;