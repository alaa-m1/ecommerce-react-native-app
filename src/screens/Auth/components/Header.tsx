import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ChevronLeft} from 'lucide-react-native';
import {palette, titleFontSize} from '~/shared';
type HeaderProps = {
  title: string;
  onNavBackPress: (event: GestureResponderEvent) => void;
};

export const Header = ({title, onNavBackPress}: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={onNavBackPress}>
        <ChevronLeft color={palette.primary.main} size={30} />
      </Pressable>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: titleFontSize,
    color: palette.primary.main,
    marginLeft:20
  },
});
