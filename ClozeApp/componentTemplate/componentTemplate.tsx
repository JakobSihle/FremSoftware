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
const styles = StyleSheet.create({});

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
function ComponentTemplate({children, prop1, prop2}: componentTemplateProps): React.JSX.Element {
  return <View />;
}

export default ComponentTemplate;
