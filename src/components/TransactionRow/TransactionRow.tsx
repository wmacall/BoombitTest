import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Transactions} from '../../api';
import {formatDate, theme} from '../../utils';
import {COLORS} from '../../constants';

interface TransactionRowProps extends Transactions {}

export const TransactionRow = ({amount, date, detail}: TransactionRowProps) => {
  const formattedDate = formatDate(date);
  return (
    <View style={styles.container}>
      <View style={styles.containerAmount}>
        <Text style={styles.amount}>${amount.toFixed(2)}</Text>
      </View>
      <View>
        <Text style={styles.detail}>{detail}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: theme.scaleHeight(20),
    alignItems: 'center',
  },
  containerAmount: {
    backgroundColor: COLORS.GRAY_200,
    borderRadius: theme.scaleWidth(10),
    height: theme.scaleHeight(60),
    width: theme.scaleWidth(60),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.scaleWidth(10),
  },
  amount: {
    color: COLORS.SUCCESS,
    fontWeight: 'bold',
  },
  date: {
    color: 'grey',
  },
  detail: {
    color: 'grey',
  },
});
