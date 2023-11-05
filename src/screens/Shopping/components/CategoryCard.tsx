import {StyleSheet} from 'react-native';
import {Card, Icon, Text} from 'react-native-paper';
import {EButton} from '~/shared';
import {useCategoriesImages} from '../hooks';

type CategoryCardProps = {
  product: Product;
};

export const CategoryCard = ({product}: CategoryCardProps) => {
  const LeftContent = () => <Icon source="cart-arrow-down" size={20} />;
  const images = useCategoriesImages();
  return (
    <Card style={styles.container}>
      <Card.Title title={product.title} left={LeftContent} />
      <Card.Content>
        <Text variant="titleLarge">{product.title}</Text>
        <Text variant="bodyMedium">{product.description}</Text>
      </Card.Content>
      {/* All images should be saved in the server, This is just for testing purpose */}
      <Card.Cover
        resizeMode="contain"
        source={
          images.find(
            item =>
              item.name === `${product.categoryLabel}/${product.imagePath}`,
          )?.image
        }
      />
      <Card.Actions style={styles.actions}>
        <EButton
          variant="contained"
          label="Add to cart"
          onPress={() => console.log('add to cart')}
          viewStyle={styles.addBtn}
        />
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  actions: {
    alignSelf: 'center',
  },
  addBtn: {
    width: '50%',
  },
});
