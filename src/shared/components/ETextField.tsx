import {Pressable, StyleSheet, TextInput, View, Text} from 'react-native';
import {Icon} from 'react-native-paper';
import {useState} from 'react';
import {palette, textFieldFontSize} from '../style';
type ETextFieldProps = {
  label: string;
  placeholder: string;
  isPassword?: boolean;
};
export const ETextField = ({
  label,
  placeholder,
  isPassword = false,
}: ETextFieldProps) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && hidePassword}
          placeholder={placeholder}
          style={styles.input}></TextInput>
        {isPassword && (
          <Pressable
            // hitSlop={2}
            style={styles.icon}
            onPress={() => setHidePassword(h => !h)}>
            {hidePassword ? (
              <Icon source="eye" size={25} color={palette.primary.main} />
            ) : (
              <Icon source="eye-off" size={25} color={palette.primary.main} />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginVertical: 5, flexDirection: 'column'},
  label: {
    fontSize: 20,
    color: palette.primary.dark,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
  },
  input: {
    flexGrow: 1,
    fontSize: textFieldFontSize,
    color: palette.primary.dark,
  },
  icon: {
    paddingHorizontal: 20,
  },
});
