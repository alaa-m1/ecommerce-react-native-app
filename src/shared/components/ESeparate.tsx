import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

type ESeparateProps = {
  label: string;
};
export const ESeparate = ({label}: ESeparateProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text>{label}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    flexGrow: 1,
    height: 1,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 2,
  },
});
