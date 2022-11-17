import {StatusBar, StyleSheet, Text} from 'react-native';
import React from 'react';
import Container from '../../components/ContainerView';
import RowView from '../../components/RowView';
import CardSection from './Card/CardSection';
import {data_destination} from '../../utils/data';
import {IBottomTabParamList} from '../../navigation/RootTab';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

type HomeProps = BottomTabScreenProps<IBottomTabParamList, 'Home'>;
// ({route, navigation}: HomeProps)
const Home = ({}: HomeProps) => {
  // console.log('navigation: ', navigation);
  // console.log('route: ', route);
  // const handleTest = () => {
  //   navigation.navigate('Home');
  // };
  return (
    <Container style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text style={styles.headerHome}>
        Explore the <Text style={styles.textBold}>Beautiful</Text>
        <Text style={[styles.textBold, styles.textColor]}> world!</Text>
      </Text>

      <RowView style={styles.headerList}>
        <Text style={styles.textLeftHeaderList}>Best Destination</Text>
        <Text style={styles.textRightHeaderList}>View all</Text>
      </RowView>
      <CardSection data={data_destination} />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerHome: {
    color: '#2E323E',
    fontSize: 38,
    fontWeight: '300',
    lineHeight: 50,
    marginRight: 55,
    marginLeft: 20,
    marginTop: 24,
    marginBottom: 30,
  },
  textBold: {
    fontWeight: '700',
  },
  textColor: {
    color: '#FF7029',
  },
  headerList: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textLeftHeaderList: {
    color: '#1B1E28',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600',
  },
  textRightHeaderList: {
    color: '#0D6EFD',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
  },
});
