import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {theme} from '../../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  contentContainerStyle: {
    paddingBottom: theme.scaleHeight(80),
    paddingTop: theme.scaleHeight(20),
  },
});
