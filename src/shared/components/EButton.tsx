import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import { palette } from '../style/palettes';

type EButtonProps = {
  label: string;
  variant?: 'text' | 'outlined' | 'contained';
  onPress: (event: GestureResponderEvent) => void;
};
export const EButton = ({label, variant = 'text', onPress}: EButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.btn, ...styles[variant]}}>
      <Text style={styles.btnLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '100%',
    marginVertical: 10,
  },
  text: {},
  outlined: {},
  contained: {
    backgroundColor: palette.info.main,
    borderRadius: 8,
  },
  btnLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
