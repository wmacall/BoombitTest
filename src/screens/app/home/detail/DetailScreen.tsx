import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {
  Card,
  Header,
  Loading,
  NotFound,
  TransactionRow,
} from '../../../../components';
import {useCreditCards} from '../../../../hooks';
import {
  DetailScreenNavigationProp,
  DetailScreenRouteProp,
} from './DetailScreen.types';
import styles from './DetailScreen.styles';
import EmptyTransaction from '../../../../assets/img/no_transaction.png';
import {useDispatch} from 'react-redux';
import {onChangeCardStatus} from '../../../../store';
import {CARD_OPTIONS} from '../../../../constants';
import {theme} from '../../../../utils';

export const DetailScreen = ({navigation}: DetailScreenNavigationProp) => {
  const [showCardDetails, setShowCardDetails] = useState(false);
  const {params} = useRoute<DetailScreenRouteProp>();
  const cardId = params.id ?? '';
  const {isLoading, cardDetail, onGetCardDetail} = useCreditCards();
  const dispatch = useDispatch();

  const onToggleShowCardDetails = () => setShowCardDetails(prev => !prev);

  const onOpenDrawer = () => navigation.openDrawer();

  const onPressCardAction = (status: string) => {
    dispatch(onChangeCardStatus({id: cardId, status}));
  };

  useEffect(() => {
    onGetCardDetail(cardId);
  }, [onGetCardDetail, cardId]);

  return (
    <View style={styles.container}>
      <Header onOpenDrawer={onOpenDrawer} showBackButton />
      {isLoading ? <Loading /> : null}
      {cardDetail && !isLoading ? (
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <View style={[styles.container, styles.containerDetail]}>
            <Card {...cardDetail} canShowDetail={showCardDetails} />
            <View style={styles.containerButtons}>
              {CARD_OPTIONS[cardDetail.state].map((option, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => onPressCardAction(option.status)}
                  style={[
                    styles.buttonAction,
                    {marginLeft: index % 2 !== 0 ? theme.scaleWidth(10) : 0},
                  ]}>
                  <Text style={styles.buttonText}>{option.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              onPress={onToggleShowCardDetails}
              style={styles.primaryButton}>
              <Text style={styles.primaryText}>
                {showCardDetails ? 'Hide Details' : 'Show Details'}
              </Text>
            </TouchableOpacity>
            <Text style={styles.transactionTitle}>Transaction History</Text>
            {cardDetail?.transactions.map(transaction => (
              <TransactionRow {...transaction} key={transaction.uuid} />
            ))}
            {cardDetail.transactions.length === 0 ? (
              <View>
                <Image
                  source={EmptyTransaction}
                  style={styles.noTransactionImage}
                />
                <Text style={styles.noTransactionTitle}>
                  No transactions yet
                </Text>
              </View>
            ) : null}
          </View>
        </ScrollView>
      ) : null}
      {!cardDetail && !isLoading ? <NotFound /> : null}
    </View>
  );
};
