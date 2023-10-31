import {StyleSheet, Text, View} from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
type HeaderProps = {
  title: string;
};

export const Header = ({title}: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <ChevronLeft  color="#000" size={30} />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection:"row",
    justifyContent: 'flex-start',
    paddingVertical:20,
  },
  headerTitle:{
    fontSize:24
  }
});
