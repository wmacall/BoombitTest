import {StyleSheet} from 'react-native';
import {theme} from '../../utils';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.WHITE,
  },
  container: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.scaleWidth(20),
    height: theme.scaleHeight(50),
  },
  headerItem: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleItem: {
    flex: 4,
  },
  drawerItem: {},
  title: {
    fontSize: theme.scaleFont(24),
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
});
