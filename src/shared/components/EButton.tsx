import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {palette} from '../style/palettes';
import {Icon} from 'react-native-paper';
import {IconProps} from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';
import _ from 'lodash';

/**
 * @param iconProps The full list of all available icons
 * https://callstack.github.io/react-native-paper/docs/guides/icons
 *
 * Example:
 * iconProps={{name: 'google', color: '#4285F4', size: 30}}
 */

export const EButton = ({
  label = '',
  variant = 'text',
  onPress,
  viewStyle = {},
  iconProps = null,
}: EButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.btn, ...viewStyle, ...styles[variant]}}>
      {iconProps !== null && (
        <Icon size={20} source={iconProps.name} {...iconProps} />
      )}
      {!_.isEmpty(label) && <Text style={styles.btnLabel}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 10,
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
  },
  text: {},
  outlined: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: palette.info.main,
  },
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

type EButtonProps = {
  label?: string;
  variant?: 'text' | 'outlined' | 'contained';
  onPress: (event: GestureResponderEvent) => void;
  viewStyle?: ViewStyle;
  iconProps?: Partial<IconProps> | null;
};
