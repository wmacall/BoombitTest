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
import {DetailScreenNavigationProp} from './DetailScreen.types';
import styles from './DetailScreen.styles';
import EmptyTransaction from '../../../../assets/img/no_transaction.png';

export const DetailScreen = () => {
  const [showCardDetails, setShowCardDetails] = useState(false);
  const {params} = useRoute<DetailScreenNavigationProp>();
  const cardId = params.id ?? '';
  const {isLoading, cardDetail, onGetCardDetail} = useCreditCards();

  const onToggleShowCardDetails = () => setShowCardDetails(prev => !prev);

  useEffect(() => {
    onGetCardDetail(cardId);
  }, [onGetCardDetail, cardId]);

  return (
    <View style={styles.container}>
      <Header showBackButton />
      {isLoading ? <Loading /> : null}
      {cardDetail && !isLoading ? (
        <ScrollView>
          <View style={[styles.container, styles.containerDetail]}>
            <Card {...cardDetail} canShowDetail={showCardDetails} />
            <View style={styles.containerButtons}>
              <TouchableOpacity style={styles.buttonStolen}>
                <Text style={styles.buttonText}>Report as Stolen</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onToggleShowCardDetails}
                style={styles.primaryButton}>
                <Text style={styles.primaryText}>
                  {showCardDetails ? 'Hide Details' : 'Show Details'}
                </Text>
              </TouchableOpacity>
            </View>
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
