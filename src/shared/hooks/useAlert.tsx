import {useMemo} from 'react';
import {Alert, AlertButton} from 'react-native';

type useAlertProps = {
  title: string;
  msg: string;
  cancelBtn: {cancelable?: boolean; text?: string; onPress?: () => void};
  onDismiss: () => void;
};
export const useAlert = ({
  title,
  msg,
  cancelBtn: {
    cancelable = true,
    text = 'Cancel',
    onPress = () => console.log('on cancel press'),
  },
  onDismiss,
}: useAlertProps) => {
  const cancelBtnObject = useMemo<AlertButton>(
    () => ({
      text,
      onPress,
      style: 'cancel',
    }),
    [cancelable],
  );
  const showAlert = () =>
    Alert.alert(title, msg, [cancelBtnObject], {
      cancelable,
      onDismiss,
    });
  return {showAlert};
};
// Alert.alert(
//   'This alert was dismissed by tapping outside of the alert dialog.',
// ),
