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
import Tile from './tile/tile';

/**
 * LOCAL STYLES DEFINITION
 */
const styles = StyleSheet.create({
  feedContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  feedLeftColumn: {
    width: '50%',
    height: 'auto',
    paddingLeft: 10,
    paddingRight: 5,
  },
  feedRightColumn: {
    width: '50%',
    height: 'auto',
    paddingLeft: 5,
    paddingRight: 10,
  },
});

/**
 * COMPONENT PROPS DEFINITION
 */
type componentTemplateProps = PropsWithChildren<{
  prop1: string;
  prop2: Int32;
}>;

/**
 * COMPONENT FUNCTION DEFINITION
 */
function Feed({children, prop1, prop2}: componentTemplateProps): React.JSX.Element {
  return (
    <View style={styles.feedContainer}>
      <View style={styles.feedLeftColumn}>
        <Tile prop1="Yo" prop2="32" />
        <Tile prop1="Yo" prop2="32" />
      </View>
      <View style={styles.feedRightColumn}>
        <Tile prop1="Yo" prop2="32" />
        <Tile prop1="Yo" prop2="32" />
      </View>
    </View>
  );
}

export default Feed;
