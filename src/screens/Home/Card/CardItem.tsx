/* eslint-disable react-native/no-inline-styles */
import {Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FunctionComponent} from 'react';
import {IDestination} from '../../../utils/data';
import RowView from '../../../components/RowView';
import icon_star from '../../../assets/icon_star.png';
import icon_place from '../../../assets/icon_place.png';
import ShadowView from '../../../components/ShadowView/ShadowView';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IRootStackParamList} from '../../../navigation/RootStack';

type CardItemProps = StackNavigationProp<IRootStackParamList>;

const CardItem: FunctionComponent<IDestination> = props => {
  const navigation = useNavigation<CardItemProps>();

  const showDetail = () => {
    navigation.navigate('DetailCard', {id: props.id});
  };

  return (
    <TouchableOpacity onPress={showDetail}>
      <ShadowView
        width={268}
        height={384}
        borderRadius={24}
        styleChild={{padding: 14}}
        style={{marginTop: 20, marginLeft: 20}}>
        <Image
          source={props.image}
          style={styles.imageItem}
          resizeMode="cover"
        />
        <RowView
          justifyBetween
          style={{
            width: '95%',
            marginTop: 14,
            marginBottom: 8,
          }}>
          <Text style={styles.textName}>{props.name}</Text>
          <RowView>
            <Image source={icon_star} style={styles.star} />
            <Text style={styles.textRating}>{props.rating}</Text>
          </RowView>
        </RowView>

        <RowView justifyBetween style={{width: '95%'}}>
          <RowView>
            <Image source={icon_place} style={styles.iconPlace} />
            <Text style={styles.textPlace}>{props.place}</Text>
          </RowView>
          <Text>...</Text>
        </RowView>
      </ShadowView>
    </TouchableOpacity>
  );
};

export default CardItem;
const styles = StyleSheet.create({
  imageItem: {
    width: 240,
    height: 286,
    borderRadius: 20,
  },
  textName: {
    color: '#1B1E28',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  textPlace: {
    color: '#7D848D',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
  },
  iconPlace: {
    width: 16,
    height: 16,
  },
  textRating: {
    color: '#1B1E28',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
  },
  star: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
});
