import {StyleSheet} from 'react-native';
import {theme} from '../../utils';
import {COLORS} from '../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.scaleWidth(20),
    paddingVertical: theme.scaleHeight(20),
  },
  headerItem: {
    flex: 2,
  },
  titleItem: {
    flex: 4,
  },
  drawerItem: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: theme.scaleFont(24),
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
});
