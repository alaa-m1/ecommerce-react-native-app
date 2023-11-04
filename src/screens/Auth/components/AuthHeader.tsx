import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Icon} from 'react-native-paper';
import {palette, titleFontSize} from '~/shared';
type AuthHeaderProps = {
  title: string;
  onNavBackPress: (event: GestureResponderEvent) => void;
};

export const AuthHeader = ({title, onNavBackPress}: AuthHeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={onNavBackPress}>
        <Icon source="chevron-left" size={40} color={palette.primary.main}/>
      </Pressable>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: titleFontSize,
    color: palette.primary.main,
    marginLeft: 20,
  },
});
