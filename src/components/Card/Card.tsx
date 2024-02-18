import React, {useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Card as CardInterface} from '../../api';
import styles from './Card.styles';
import {Icon, IconName} from '../Icon';

interface CardProps extends CardInterface {
  onPressCard: (uuid: string) => void;
}

const IconCard: Record<string, IconName> = {
  MasterCard: 'MasterCardIcon',
  Visa: 'VisaCardIcon',
  Amex: 'AmexCardIcon',
};

export const Card = ({
  card_number,
  holder_name,
  expiration_date,
  brand,
  onPressCard,
  uuid,
  color,
}: CardProps) => {
  const onPress = useCallback(() => {
    onPressCard(uuid);
  }, [uuid, onPressCard]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}]}>
      {/* <View style={styles.circleOne} /> */}
      {/* <View style={styles.circleTwo} /> */}
      <Text style={styles.textLG}>
        <Text style={styles.textMD}>● ● ● ● </Text>
        {card_number.slice(-4)}
      </Text>
      <View style={styles.containerDetails}>
        <View style={styles.containerRow}>
          <View>
            <Text style={styles.textSM}>Card holder name</Text>
            <Text style={styles.textMD}>{holder_name}</Text>
          </View>
          <View style={styles.containerExpDate}>
            <Text style={styles.textSM}>Exp date</Text>
            <Text style={styles.textMD}>{expiration_date}</Text>
          </View>
        </View>
        <View style={styles.containerBrand}>
          <Icon name={IconCard[brand]} />
          <Text style={styles.textMD}>{brand}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
