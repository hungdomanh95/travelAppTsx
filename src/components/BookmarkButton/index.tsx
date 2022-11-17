import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FunctionComponent} from 'react';
import bookmarkIcon from '../../assets/bookmark.png';
import {size} from '../../theme/size';

const BookmarkButton: FunctionComponent = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <Image source={bookmarkIcon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default BookmarkButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(27,30,40,0.16)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: size.SIZE_BTN_HEADER,
    height: size.SIZE_BTN_HEADER,
  },
  icon: {
    width: size.SIZE_ICON_HEADER,
    height: size.SIZE_ICON_HEADER,
  },
});
