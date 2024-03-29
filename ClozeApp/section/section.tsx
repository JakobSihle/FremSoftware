/**
 * GLOBAL IMPORTS
 */
import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import type {PropsWithChildren} from 'react';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

/**
 * IMPORTS FROM OTHER COMPONENTS
 */

/**
 * LOCAL STYLES DEFINITION
 */
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

/**
 * COMPONENT PROPS DEFINITION
 */
type SectionProps = PropsWithChildren<{
  title: string;
}>;

/**
 * COMPONENT FUNCTION DEFINITION
 */
function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

export default Section;
