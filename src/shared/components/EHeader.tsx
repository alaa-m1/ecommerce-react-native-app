import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Icon} from 'react-native-paper';
import {IconProps} from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';
import {headerIconSize, palette, titleFontSize} from '../style';
import {useState} from 'react';
import {ETextField} from './ETextField';
import {userInfoState} from '~/states';
import {useRecoilState} from 'recoil';
type EHeaderProps = {
  title: string;
  iconProps?: Partial<Omit<IconProps, 'size'>> & {
    size: number;
    iconSource: EHeaderIconSource;
    iconLocation: 'left' | 'right';
    onIconPress: () => void;
  };
};
export const EHeader = ({title, iconProps}: EHeaderProps) => {
  const [showSearch, setShowSearch] = useState(false);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const {iconSource, iconLocation, onIconPress, size, ...otherIconProps} =
    iconProps!;
  const handleOnPress = (
    e: GestureResponderEvent,
    iconSource: EHeaderIconSource,
  ) => {
    if (iconSource === 'shopping-search') setShowSearch(p => !p);
    else onIconPress();
  };
  return (
    <View>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          {iconProps?.iconLocation === 'left' ? (
            <Pressable
              onPress={event => handleOnPress(event, iconProps.iconSource)}>
              <Icon
                source={iconSource ?? ''}
                size={size}
                color={palette.info.dark}
                {...otherIconProps}
              />
            </Pressable>
          ) : (
            <View></View>
          )}

          <Text style={styles.title}>{title}</Text>

          {iconProps?.iconLocation === 'right' ? (
            <Pressable
              onPress={event => handleOnPress(event, iconProps.iconSource)}>
              <Icon
                source={iconProps.iconSource}
                size={size}
                color={palette.info.dark}
                {...otherIconProps}
              />
            </Pressable>
          ) : (
            <View></View>
          )}
        </View>
        <Pressable onPress={event => setUserInfo({})}>
          <Icon source={'logout'} size={30} color={palette.success.light} />
        </Pressable>
      </View>
      {showSearch ? (
        <ETextField label="" placeholder="Search for products - under construction -" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height:40
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: titleFontSize,
  },
});
