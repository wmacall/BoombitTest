import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {theme} from '../../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  image: {
    width: theme.scaleWidth(100),
    height: theme.scaleHeight(100),
    borderRadius: theme.scaleWidth(50),
    alignSelf: 'center',
  },
  heading: {
    fontSize: theme.scaleFont(30),
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: theme.scaleHeight(20),
  },
  description: {
    fontSize: theme.scaleFont(16),
    textAlign: 'center',
    marginHorizontal: theme.scaleWidth(20),
    fontStyle: 'italic',
    color: COLORS.GRAY,
    marginBottom: theme.scaleHeight(20),
  },
});
