/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {IRootStackParamList} from '../../../navigation/RootStack';
import {StackScreenProps} from '@react-navigation/stack';
import Container from '../../../components/ContainerView';
import {data_destination} from '../../../utils/data';
import {height, width} from '../../../theme/size';
import RowView from '../../../components/RowView';
import icon_star from '../../../assets/icon_star.png';
import icon_place from '../../../assets/icon_place.png';
import Button from '../../../components/Button';
const MAX_LINE = 3;
type DetailCardProps = StackScreenProps<IRootStackParamList, 'DetailCard'>;

const DetailCard = ({route, navigation}: DetailCardProps) => {
  const itemDetail = data_destination[route.params.id - 1];

  const [numberline, setNumberLine] = useState<number | undefined>(MAX_LINE);

  return (
    <Container style={styles.container}>
      <Image
        source={itemDetail.image}
        resizeMode="cover"
        style={styles.imageTop}
      />

      <View style={styles.viewDetail}>
        <RowView justifyBetween>
          <View>
            <Text style={styles.titleName}>{itemDetail.name}</Text>
            <Text style={styles.textGray}>{itemDetail.place}</Text>
          </View>
          <Image source={itemDetail.avatarOwn} style={styles.avatarOwn} />
        </RowView>
        <RowView justifyBetween style={{marginTop: 24}}>
          <RowView>
            <Image source={icon_place} style={styles.iconPlace} />
            <Text style={styles.textGray}>{itemDetail.place}</Text>
          </RowView>
          <RowView>
            <Image source={icon_star} style={styles.star} />
            <Text style={styles.textRating}>{itemDetail.rating}</Text>
          </RowView>
          <Text style={styles.textPrice}>
            ${itemDetail.price}/<Text style={styles.textGray}>Person</Text>
          </Text>
        </RowView>
        <SafeAreaView style={styles.marginVertical}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={itemDetail.listHotel}
            renderItem={({item}: any) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('ShowImage', {image: item})}>
                <Image source={item} style={styles.imageHotel} />
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>

        <Text style={styles.textAbout}>About Destination</Text>
        <SafeAreaView style={styles.containerTextContent}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text numberOfLines={numberline} style={styles.textContent}>
              {itemDetail.content}
            </Text>
            <TouchableOpacity
              onPress={() =>
                numberline ? setNumberLine(undefined) : setNumberLine(MAX_LINE)
              }>
              <Text style={[styles.textContent, styles.textMore]}>
                {numberline ? 'Read Less' : 'Read More'}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
        <View style={styles.buttonAction}>
          <Button onPress={() => {}} content="Book Now" />
        </View>
      </View>
    </Container>
  );
};

export default DetailCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageTop: {
    width,
    height: height / 2,
    zIndex: 1,
  },
  viewDetail: {
    height: height / 1.9,
    width,
    borderRadius: 32,
    zIndex: 2,
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 40,
  },
  titleName: {
    color: '#1B1E28',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 32,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  textGray: {
    color: '#7D848D',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  avatarOwn: {
    width: 48,
    height: 48,
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
  textPrice: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.3,
    color: '#0D6EFD',
  },
  iconPlace: {
    width: 16,
    height: 16,
  },
  marginVertical: {marginVertical: 24},
  imageHotel: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginRight: 24,
  },
  textAbout: {
    color: '#1B1E28',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    letterSpacing: 0.5,
  },
  textContent: {
    color: '#7D848D',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 22,
  },
  textMore: {
    color: '#FF7029',
  },
  containerTextContent: {marginVertical: 8, flex: 1},
  buttonAction: {flex: 1},
});
