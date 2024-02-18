import React, {useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Card as CardInterface} from '../../api';
import styles from './Card.styles';
import {Icon, IconName} from '../Icon';
import {onCreateCardMask, onMaskCVV, onMaskExpirationDate} from '../../utils';

interface CardProps extends CardInterface {
  onPressCard?: (uuid: string) => void;
  canShowDetail?: boolean;
}

const IconCard: Record<string, IconName> = {
  MasterCard: 'MasterCardIcon',
  Visa: 'VisaCardIcon',
  Amex: 'AmexCardIcon',
};

const StatusColor: Record<string, string> = {
  active: 'green',
  stolen: 'red',
  locked: 'orange',
  expired: 'gray',
};

export const Card = ({
  card_number,
  holder_name,
  expiration_date,
  brand,
  onPressCard,
  uuid,
  color,
  state,
  cvv,
  canShowDetail = false,
}: CardProps) => {
  const onPress = useCallback(() => {
    onPressCard?.(uuid);
  }, [uuid, onPressCard]);

  const numberCard = canShowDetail
    ? card_number
    : onCreateCardMask(card_number);
  const cvvNumber = canShowDetail ? cvv : onMaskCVV(cvv);
  const expDate = canShowDetail ? expiration_date : onMaskExpirationDate();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}]}>
      <View style={styles.containerStatus}>
        <View
          style={[styles.dotStatus, {backgroundColor: StatusColor[state]}]}
        />
        <Text style={styles.statusText}>{state}</Text>
      </View>
      <Text style={styles.textLG}>{numberCard}</Text>
      <View style={styles.containerDetails}>
        <View style={styles.containerRow}>
          <View>
            <Text style={styles.textSM}>Name</Text>
            <Text style={styles.textMD}>{holder_name}</Text>
          </View>
          <View style={styles.containerExpDate}>
            <Text style={styles.textSM}>Exp date</Text>
            <Text style={styles.textMD}>{expDate}</Text>
          </View>
          <View style={styles.containerExpDate}>
            <Text style={styles.textSM}>CVV</Text>
            <Text style={styles.textMD}>{cvvNumber}</Text>
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
