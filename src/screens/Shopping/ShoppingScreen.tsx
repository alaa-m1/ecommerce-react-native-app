import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {EHeader} from '~/shared';
import {useCategories} from './hooks';
import {CategoriesFlatList, CategoryCard} from './components';
import {ScrollView, StyleSheet} from 'react-native';

type ShoppingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Shopping'
>;

type ShoppingScreenProps = {
  navigation: ShoppingScreenNavigationProp;
};

const ShoppingScreen = ({navigation}: ShoppingScreenProps): JSX.Element => {
  const {categories, mainCategoriesLabels, activeCategoryItems} =
    useCategories();

  return (
    <SafeAreaView style={styles.container}>
      <EHeader
        title="Shopping"
        iconProps={{
          iconLocation: 'left',
          iconSource: 'shopping-search',
          size: 30,
          onIconPress: () => console.log('IconPressed'),
        }}
      />
      <CategoriesFlatList items={mainCategoriesLabels} />
      <ScrollView>
        {activeCategoryItems.map((category, index) => (
          <CategoryCard key={index} product={category} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({container: {marginBottom: 140}});
export default ShoppingScreen;
