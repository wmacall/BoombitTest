import React, {useCallback, useEffect} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from './HomeScreen.types';
import {HomeStackRoutes} from '../../../routes';
import {useCreditCards} from '../../../hooks';
import styles from './HomeScreen.styles';
import {Card, Header, Loading} from '../../../components';
import {Card as CardInterface} from '../../../api';

export const HomeScreen = ({navigation}) => {
  const {navigate} = useNavigation<HomeScreenNavigationProp>();
  const {isLoading, cards, onGetCreditCards} = useCreditCards();

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
  }, [onGetCreditCards]);

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
