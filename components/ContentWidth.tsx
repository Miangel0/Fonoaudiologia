import { View, StyleSheet, useWindowDimensions, ViewStyle } from 'react-native';
import { getContentWidth } from '@/constants/layout';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export default function ContentWidth({ children, style }: Props) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: getContentWidth(width) }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
  },
});
