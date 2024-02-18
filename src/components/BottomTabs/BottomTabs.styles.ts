import {StyleSheet} from 'react-native';
import {theme} from '../../utils';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: theme.scaleHeight(15),
    position: 'absolute',
    width: '80%',
    alignSelf: 'center',
    bottom: theme.scaleHeight(20),
    height: theme.scaleHeight(60),
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: theme.scaleWidth(20),
    height: theme.scaleHeight(20),
    marginBottom: theme.scaleHeight(5),
  },
});
