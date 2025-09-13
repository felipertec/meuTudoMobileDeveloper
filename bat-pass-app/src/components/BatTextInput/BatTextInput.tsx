import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatInterfaceProps{
   pass: string
}

export default function BatTextInput(props: BatInterfaceProps) {
   return(
      <TextInput
         style={styles.inputer}
         placeholder='pass'
         value={props.pass}
      >
      </TextInput>
   );
}