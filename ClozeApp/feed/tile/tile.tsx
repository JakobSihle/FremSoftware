/**
 * GLOBAL IMPORTS
 */
import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';

/**
 * IMPORTS FROM OTHER COMPONENTS
 */

/**
 * LOCAL STYLES DEFINITION
 */
const styles = StyleSheet.create({
  tileContainer: {
    backgroundColor: 'blue',
    height: 300,
    marginVertical: 5,
    borderRadius: 5,
  },
});

/**
 * COMPONENT PROPS DEFINITION
 */
type tileProps = PropsWithChildren<{
  prop1: string;
  prop2: Int32;
}>;

/**
 * COMPONENT FUNCTION DEFINITION
 */
function Tile({children, prop1, prop2}: tileProps): React.JSX.Element {
  return <View style={styles.tileContainer} />;
}

export default Tile;
