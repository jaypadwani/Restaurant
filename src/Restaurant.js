import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
export const Restaurant = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: 'white',
          alignSelf: 'flex-end',
          width: 100,
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Image
          source={{
            uri: 'data:image/png;base64,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',
          }}
          style={{height: 35, width: 35, alignSelf: 'center'}}
        />

        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRty8-nC2WerezxtzGxlxOkVPCaN7IeKcmLFw&usqp=CAU',
          }}
          style={{height: 35, width: 35, alignSelf: 'center'}}
        />
      </View>
      <ScrollView style={{backgroundColor: 'white', flex: 1}}>
        <View style={{padding: 15}}>
          <Text style={{flexWrap: 'wrap', fontSize: 35, fontWeight: '700'}}>
            What would you like to eat?
          </Text>

          <TouchableOpacity
            style={{
              marginTop: '3%',
              width: '23%',
              height: 60,
              borderRadius: 30,
              backgroundColor: `#87cefa`,
              justifyContent: 'center',
            }}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRty8-nC2WerezxtzGxlxOkVPCaN7IeKcmLFw&usqp=CAU',
              }}
              style={{height: 35, width: 35, alignSelf: 'center'}}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              marginTop: '3%',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 23}}>Foodies</Text>

            <Text style={{color: `#20b2aa`, fontWeight: 'bold', fontSize: 16}}>
              See All
            </Text>
          </View>

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            }}
            style={{height: 200, width: 250, borderRadius: 25, marginTop: 15}}
          />

          <Text
            style={{
              color: 'grey',
              fontWeight: 'bold',
              fontSize: 20,
              paddingLeft: 5,
              marginTop: 5,
            }}>
            Best Experience
          </Text>
          <Text
            style={{
              color: 'grey',
              fontWeight: 'bold',
              fontSize: 20,
              paddingLeft: 5,
            }}>
            So pleasant.
          </Text>

          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 25,
              paddingLeft: 5,
              marginTop: 15,
            }}>
            Discount
          </Text>

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            }}
            style={{
              height: 200,
              width: '100%',
              borderRadius: 25,
              marginTop: 15,
              marginBottom: 20,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
