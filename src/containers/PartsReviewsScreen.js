import React, { PureComponent } from 'react';
import {
	View,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Text,
	TextInput,
	Image,
	ScrollView,
	Modal,
} from 'react-native';

import { Madoka } from 'react-native-textinput-effects';
import { styles, fonts, colors, metrics } from '../themes';
const { width, height } = Dimensions.get('window');
import NavigationService from '../NavigationService';
import CustomNewAd from '../components/common/customNewAd';
import { connect } from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome";
import * as partShopAction from "../redux/actions/partsShop";
import CommunitySaysScreen from "./CommunitySaysScreen";
import { Fonts } from '../resources/constants/Fonts';
import __ from '../resources/copy';
import StarRating from 'react-native-star-rating';
import MultipleReviews from "../components/review/MultipleReviews";

class PartsReviewsScreen extends PureComponent {

	static navigationOptions = ({ navigation }) => ({
		title: __('Reviews', '')
	});

	constructor(props) {
		super(props);
		this.partShopDetail()
	}
	state = {
		modalVisible: false,
		reviews:[],
		avg_rating:10,
		starCount: 0
	};

	partShopDetail() {
		partShopAction
			.partShopDetail()
			.then(res => {
				// debugger
				this.setState({reviews:res.data.reviews , avg_rating:res.data.avg_rating })
			})
			.catch(err => {
				console.log("error" + JSON.stringify(err));
			});
	}

	onRateNowPress = () => {
		this.setState({ modalVisible: true });
	};

	onRatingSelect = (rating)=>{
		this.setState({modalVisible:false})
		const data = {
			rate: rating,
			shop_type: 'partsshop'
		};
		NavigationService.navigate('GiveReviewScreen', {rating:data ,  callBack:this.partShopDetail})
	}
	onReviewClick(overall, service, value, cleanliness, competency){
		this.setState({modalVisible:false})
		const data = {
			rate: overall,
			service,
			value,
			cleanliness,
			competency,
			shop_type: 'partsshop'
		};
		NavigationService.navigate('GiveReviewScreen', {rating:data , callBack:this.partShopDetail})
	}

	placeholderView = ()=>{
		return (
			<View
				style={[
					stylePartsReviewsScreen.container,
					{
						alignItems: 'center',
						paddingTop: 8,
					},
				]}
>
				<Image
					style={stylePartsReviewsScreen.reviewPicture}
					source={require('../resources/icons/rating-empty.png')}
					resizeMode="contain"
				/>

				<Text style={stylePartsReviewsScreen.rateTxtHeading}>{__('Be the first to rate this service' , this.props.language)}</Text>

				<Text style={stylePartsReviewsScreen.noReviewText}>
					{/* It takes 3 sec only {'\n'} Your opinion helps other members */}
					{__('it takes few seconds to share and support others with your experience' , this.props.language)}
				</Text>

				<TouchableOpacity onPress={this.onRateNowPress}>
					<View style={stylePartsReviewsScreen.btnStyle}>
						<Text style={styles.tapButtonStyleTextWhite}>{__('Rate now' , this.props.language)}</Text>
					</View>
				</TouchableOpacity>

				{this.renderAds()}
			</View>
		)
	}

	// renderAds = () =>{

	// 	for (i = 0; i < this.props.preferences.home_ads.length; i++) {
	// 	  if(this.props.preferences.home_ads[i].type === "Reviews"){
	// 		return   <CustomNewAd home_ads={this.props.preferences.home_ads[i]} margin={60} /> ;
	// 	  }
	// 	}

	//   }

	renderAds = () => {
        if (this.props.preferences.banner[3] != null && this.props.preferences.banner[3].status === 'active' && this.props.preferences.banner[3].type === 'Review Comment') {
            return <CustomNewAd home_ads={this.props.preferences.banner[3]}  margin={60} />
        } else {
					return null;
				}
    }

	render() {
		return (
			<ScrollView>
				{this.state.reviews != null ? (this.state.reviews.length > 0 ?
					<CommunitySaysScreen reviews={this.state.reviews} avg_rating={this.state.avg_rating} rateNow={this.onRateNowPress} /> : this.placeholderView()) : this.placeholderView()
				}
				<Modal
					visible={this.state.modalVisible}
					transparent
					onRequestClose={() => this.setState({ modalVisible: false })}
				>
					<View style={{ flex: 1, backgroundColor: colors.navBarOpacity }}>
						<View style={{ flex: 1 }} />
						<View
							style={{
								flex: 3.2,
								backgroundColor: '#fff',
								borderTopLeftRadius: width * 0.04,
								borderTopRightRadius: width * 0.04,
								justifyContent: 'space-around',
							}}
						>
							<View style={{ alignItems: 'center' }}>
								<Text style={{ fontFamily: Fonts.CircularBold, fontSize: 21/*fontSize: width * 0.06*/, color: '#0E2D3C' }}>
								{__('Rate your experience' , this.props.language)}
								</Text>
								<Text style={{ fontSize: 14/*width * 0.03*/, color: '#0E2D3C', fontFamily: Fonts.circular_book, marginTop: 5 }}>
								{__('Your opinion helps other members' , this.props.language)}
								</Text>
							</View>
							<MultipleReviews onReviewClick={this.onReviewClick.bind(this)} />
						</View>
					</View>
				</Modal>
			</ScrollView>
		);
	}
}

mapStateToProps = (state) => {
	return {
		preferences: state.init.preferences,
		language: state.language,
	}
  }
export default connect(mapStateToProps, null)(PartsReviewsScreen)
const stylePartsReviewsScreen = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
	},
	reviewPicture: {
		width: 66,
		height: 62,
		marginVertical: metrics.margin18,
	},
	rateTxtHeading: {
		color: '#11455F',
		fontSize: fonts.size.h4,
		fontFamily: Fonts.circular_book,
	},
	noReviewText: {
		textAlign: 'center',
		color: colors.grey93,
		fontSize: fonts.size.medium,
		marginVertical: metrics.smallMargin,
		fontFamily: Fonts.circular_book,
		width: metrics.deviceWidth / 1.5,
	},
	btnStyle: {
		width: metrics.deviceWidth - 40,
		height: 60,
		justifyContent: 'center',
		backgroundColor: '#11455F',
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: metrics.radius40,
		marginVertical: 12,
	},
	ad: {
		width: metrics.deviceWidth - 8,
		height: 110,
		marginVertical: 8,
	},
});
