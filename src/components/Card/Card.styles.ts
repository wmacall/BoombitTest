import {StyleSheet, ViewStyle} from 'react-native';
import {theme} from '../../utils';
import {COLORS} from '../../constants';

const BASE_CIRCLE: ViewStyle = {
  backgroundColor: COLORS.WHITE_04,
  width: theme.scaleWidth(200),
  position: 'absolute',
  borderRadius: theme.scaleWidth(100),
  height: theme.scaleWidth(200),
};

export default StyleSheet.create({
  container: {
    width: theme.scaleWidth(350),
    height: theme.scaleHeight(200),
    marginBottom: theme.scaleHeight(20),
    backgroundColor: COLORS.BLACK,
    alignSelf: 'center',
    borderRadius: theme.scaleWidth(10),
    justifyContent: 'flex-end',
    padding: theme.scaleHeight(20),
    overflow: 'hidden',
  },
  containerStatus: {
    position: 'absolute',
    top: theme.scaleHeight(20),
    left: theme.scaleWidth(20),
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    padding: theme.scaleWidth(4),
    paddingHorizontal: theme.scaleWidth(10),
    borderRadius: theme.scaleWidth(5),
  },
  dotStatus: {
    width: theme.scaleWidth(18),
    height: theme.scaleHeight(18),
    borderRadius: theme.scaleWidth(9),
  },
  statusText: {
    fontSize: theme.scaleFont(14),
    textTransform: 'capitalize',
    marginLeft: theme.scaleWidth(10),
  },
  circleOne: {
    ...BASE_CIRCLE,
    right: -10,
    top: '-60%',
  },
  circleTwo: {
    ...BASE_CIRCLE,
    backgroundColor: COLORS.WHITE_02,
    left: -10,
    bottom: '-50%',
  },
  containerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: theme.scaleHeight(24),
  },
  containerRow: {
    flexDirection: 'row',
  },
  containerExpDate: {
    marginLeft: theme.scaleWidth(20),
  },
  textSM: {
    color: COLORS.WHITE_08,
    fontSize: theme.scaleHeight(10),
  },
  textMD: {
    color: COLORS.WHITE,
    fontWeight: '600',
    fontSize: theme.scaleHeight(14),
  },
  textLG: {
    color: COLORS.WHITE,
    fontSize: theme.scaleHeight(24),
    fontWeight: '800',
  },
  containerBrand: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
