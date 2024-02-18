import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';
import {theme} from '../../../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  containerDetail: {
    paddingHorizontal: theme.scaleWidth(20),
    paddingTop: theme.scaleHeight(20),
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonStolen: {
    flex: 1,
    height: theme.scaleHeight(50),
    borderColor: COLORS.RED,
    borderWidth: 1,
    borderRadius: theme.scaleWidth(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    flex: 1,
    height: theme.scaleHeight(50),
    borderRadius: theme.scaleWidth(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.scaleWidth(10),
    backgroundColor: COLORS.BLUE,
  },
  primaryText: {
    color: COLORS.WHITE,
    fontSize: theme.scaleFont(16),
    fontWeight: 'bold',
  },
  buttonText: {
    color: COLORS.RED,
    fontSize: theme.scaleFont(16),
    fontWeight: 'bold',
  },
  transactionTitle: {
    fontSize: theme.scaleFont(24),
    fontWeight: 'bold',
    marginVertical: theme.scaleHeight(20),
    color: COLORS.BLACK,
  },
  noTransactionImage: {
    width: theme.scaleWidth(250),
    height: theme.scaleHeight(250),
    alignSelf: 'center',
  },
  noTransactionTitle: {
    fontSize: theme.scaleFont(16),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
