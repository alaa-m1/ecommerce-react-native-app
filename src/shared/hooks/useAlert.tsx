import {useMemo} from 'react';
import {Alert, AlertButton} from 'react-native';

type useAlertProps = {
  title: string;
  msg: string;
  cancelable: boolean;
  Btns: Array<AlertButton>;
  onDismiss: () => void;
};
export const useAlert = ({
  title,
  msg,
  cancelable,
  Btns,
  onDismiss,
}: useAlertProps) => {
  const BtnsObject = useMemo<Array<AlertButton>>(
    () =>
      Btns.map(item => ({
        text: item.text,
        onPress: item.onPress,
        style: item.style,
      })),
    [Btns],
  );
  const showAlert = () =>
    Alert.alert(title, msg, [...BtnsObject], {
      cancelable,
      onDismiss,
    });
  return {showAlert};
};
// Alert.alert(
//   'This alert was dismissed by tapping outside of the alert dialog.',
// ),
