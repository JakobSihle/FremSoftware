/**
 * GLOBAL IMPORTS
 */
import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';

/**
 * IMPORTS FROM OTHER COMPONENTS
 */

/**
 * LOCAL STYLES DEFINITION
 */
const styles = StyleSheet.create({});

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
  return <view></view>;
};

export default Tile;
