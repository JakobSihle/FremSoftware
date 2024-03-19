/**
 * GLOBAL IMPORTS
 */
import React from 'react';
import type {PropsWithChildren} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';

/**
 * IMPORTS FROM OTHER COMPONENTS
 */

/**
 * LOCAL STYLES DEFINITION
 */
const styles = StyleSheet.create({
  tileContainer: {
    backgroundColor: '#d3d3d3',
    width: '100%',
    aspectRatio: 3 / 4,
    marginVertical: 5,
    borderRadius: 5,
  },
  imageDisplay: {
    borderRadius: 5,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
  },
});

/**
 * COMPONENT PROPS DEFINITION
 */
type tileProps = PropsWithChildren<{
  imgPath: string;
}>;

/**
 * COMPONENT FUNCTION DEFINITION
 */
function Tile({children, imgPath}: tileProps): React.JSX.Element {
  return (
    <View style={styles.tileContainer}>
      <Image style={styles.imageDisplay} source={imgPath} />
    </View>
  );
}

export default Tile;
