import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {theme} from '../../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: theme.scaleFont(24),
    marginBottom: theme.scaleHeight(20),
    fontWeight: 'bold',
  },
  containerForm: {
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: COLORS.WHITE,
    borderRadius: theme.scaleWidth(20),
    padding: theme.scaleWidth(20),
  },
  button: {
    height: theme.scaleHeight(50),
    backgroundColor: COLORS.BLUE,
    paddingHorizontal: theme.scaleWidth(40),
    borderRadius: theme.scaleWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: theme.scaleFont(16),
  },
});
