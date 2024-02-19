import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';
import {theme} from '../../../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  contentContainerStyle: {
    paddingBottom: theme.scaleHeight(100),
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
  buttonAction: {
    flex: 1,
    height: theme.scaleHeight(50),
    borderWidth: 1,
    borderRadius: theme.scaleWidth(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.GRAY_200,
  },
  primaryButton: {
    flex: 1,
    height: theme.scaleHeight(50),
    borderRadius: theme.scaleWidth(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BLUE,
    marginTop: theme.scaleHeight(10),
  },
  primaryText: {
    color: COLORS.WHITE,
    fontSize: theme.scaleFont(16),
    fontWeight: 'bold',
  },
  buttonText: {
    color: COLORS.BLACK,
    fontSize: theme.scaleFont(14),
    fontWeight: 'bold',
    textAlign: 'center',
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
