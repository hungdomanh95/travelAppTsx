import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import CardItem from './CardItem';
import {IDestination} from '../../../utils/data';

interface CardSectionProps {
  data: Array<IDestination>;
}

const CardSection: FunctionComponent<CardSectionProps> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={({id}: any) => id.toString()}
        renderItem={({item}: any) => <CardItem {...item} />}
        contentContainerStyle={styles.styleFlatList}
      />
    </SafeAreaView>
  );
};

export default CardSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleFlatList: {
    alignItems: 'center',
  },
});
