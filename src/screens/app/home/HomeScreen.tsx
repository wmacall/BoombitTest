/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {HomeStackRoutes} from '../../../routes';
import {useCreditCards} from '../../../hooks';
import {Card, Header, Loading} from '../../../components';
import {Card as CardInterface} from '../../../api';
import styles from './HomeScreen.styles';
import {HomeScreenNavigationProp} from './HomeScreen.types';

export const HomeScreen = ({navigation}: HomeScreenNavigationProp) => {
  const {isLoading, onGetCreditCards, cards} = useCreditCards();

  const {navigate} = navigation;

  const onPressCard = useCallback(
    (uuid: string) => {
      navigate(HomeStackRoutes.DETAIL, {id: uuid});
    },
    [navigate],
  );

  const renderCardItem: ListRenderItem<CardInterface> = ({item}) => (
    <Card onPressCard={onPressCard} {...item} />
  );

  const onOpenDrawer = () => {
    navigation.openDrawer();
  };

  useEffect(() => {
    onGetCreditCards();
  }, []);

  return (
    <View style={styles.container}>
      <Header onOpenDrawer={onOpenDrawer} title="Dashboard" />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={cards}
          keyExtractor={({uuid}) => uuid}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={renderCardItem}
        />
      )}
    </View>
  );
};
