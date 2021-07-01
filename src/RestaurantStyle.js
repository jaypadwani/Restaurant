// import React, {useState} from 'react';
// import {
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import * as Progress from 'react-native-progress';
// //local import
// import R from '../../R';
// import styles from './LoyaltyRewardsStyle';
// import {SimpleButton, RootView, Lcard} from '../../components/index';

// export const LoyaltyRewards = (props) => {
//   const [data, setdata] = useState([
//     {
//       name: 'Shopping',
//       title: 'At Partner Malls',
//       image: R.images.ShoppingList,
//     },
//     {
//       name: 'Upload Bill',
//       title: 'Upload your Bills',
//       image: R.images.BillNew,
//     },
//     {
//       name: 'Check In',
//       title: 'Check In Malls',
//       image: R.images.Checkin,
//     },
//   ]);
//   return (
//     <RootView>
//       <ScrollView style={{padding: R.dimensions.hp('1.5%')}}>
//         <View style={styles.logoContainer}>
//           <Image source={R.images.SilverBadge} style={styles.logoImage} />

//           <View style={{paddingLeft: R.dimensions.hp('1%')}}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//               }}>
//               <Text style={styles.textContainer}>SILVER </Text>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                 }}>
//                 <Image source={R.images.Coin_Money} style={styles.CoinMoney} />
//                 <Text style={styles.text}>1025 </Text>
//                 <Text style={styles.pointsText}>Points </Text>
//               </View>
//             </View>

//             <Progress.Bar
//               progress={0.6}
//               width={R.dimensions.hp('35%')}
//               color={R.colors.darkorange}
//               unfilledColor={R.colors.lightgrey}
//               borderColor={R.colors.white}
//               height={13}
//               borderWidth={1}
//             />
//             <Text style={styles.Text}>Earn 975 points more to reach Gold </Text>
//           </View>
//         </View>
//         <SimpleButton
//           title="Redeem Points"
//           customStyle={styles.touchContainer}
//           onPress={() => props.navigation.navigate('LoyaltyRewardsFirst')}
//           customTxtStyle={styles.redeem}
//         />

//         <View style={styles.secondViewContainer}>
//           <View style={styles.thirdView}>
//             <Image source={R.images.Loyalty_Rewards} style={styles.theImage} />
//             <View style={{marginTop: R.dimensions.hp('1%')}}>
//               <Text style={styles.commonText}>Earn 500 points</Text>
//               <Text style={styles.commonText}>on a successful referral</Text>

//               <TouchableOpacity style={styles.fourthView}>
//                 <Text style={styles.shareText}>Share Code</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>

//         <View style={styles.innerView3}>
//           <Text style={styles.tView1}> Increase Reward Points By</Text>

//           <View style={{marginHorizontal: '3%', marginVertical: '3%'}}>
//             <FlatList
//               data={data}
//               horizontal={true}
//               scrollEnabled={true}
//               showsHorizontalScrollIndicator={false}
//               renderItem={({item}) => (
//                 <View style={{marginLeft: 15}}>
//                   <Lcard
//                     name={item.name}
//                     text={item.title}
//                     image={item.image}
//                   />
//                 </View>
//               )}
//               keyExtractor={(item) => item.id}
//             />
//           </View>
//         </View>

//         <View style={styles.innerView6}>
//           <View style={styles.innerViews}>
//             <Text style={styles.tview6}> Redemption History</Text>
//             <TouchableOpacity style={styles.touchableView1}>
//               <Text style={styles.buttonText}>Download Statement</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.innerView7}>
//             <View>
//               <Text style={styles.tView7}> Spykar Jeans</Text>
//               <Text style={styles.TextnView}> Redeemed on 31/07/2020 </Text>
//             </View>

//             <Text style={styles.TextnView}>CODE : SPY1000</Text>
//           </View>

//           <View style={styles.innerView7}>
//             <View>
//               <Text style={styles.tView7}> BIBA</Text>
//               <Text style={styles.TextnView}> Redeemed on 31/07/2020 </Text>
//             </View>

//             <Text style={styles.TextnView}>CODE : BIBA500</Text>
//           </View>

//           <View style={styles.innerView7}>
//             <View>
//               <Text style={styles.tView7}> ZARA</Text>
//               <Text style={styles.TextnView}> Redeemed on 31/07/2020 </Text>
//             </View>
//             <View style={styles.TextnView}>
//               <Text style={styles.TextnView}>CODE : ZARA500</Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </RootView>
//   );
// };
