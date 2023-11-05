import {
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';
import {palette} from '~/shared';
import {useActiveCategory} from '../hooks';

type CategoriesFlatListProps = {
  items: Array<string>;
};

export const CategoriesFlatList = ({items}: CategoriesFlatListProps) => {
  const [activeCategory, setActiveCategory] = useActiveCategory();
  const renderCategoryItem: ListRenderItem<string> = ({
    item,
  }: {
    item: string;
  }) => {
    return (
      <View
        style={{
          ...styles.item,
          ...(activeCategory === item ? styles.activeItem : {}),
        }}>
        <Pressable onPress={() => setActiveCategory(item)}>
          <Text>{item}</Text>
        </Pressable>
      </View>
    );
  };
  return (
    <FlatList
      horizontal={true}
      data={items}
      renderItem={renderCategoryItem}
      style={styles.list}
    />
  );
};
const styles = StyleSheet.create({
  list: {
    padding: 20,
    height: 93,
  },
  item: {
    padding: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  activeItem: {
    backgroundColor: '#ccc',
    borderColor: palette.primary.main,
  },
});
