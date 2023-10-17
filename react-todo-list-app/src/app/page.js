"use client"

import styles from './page.module.css'
import InputField from '../components/input-field'
import { useState } from 'react';

export default function Home() {

  const [fieldValue, setFieldValue] = useState('test');

  const handleInputEnterPress = () => {
    console.log('add new task')
  };

  return (
    <main className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Things TODO</h1>
        <InputField
          value={fieldValue}
          clearOnEnter={true}
          onKeyEnterPress={handleInputEnterPress}
          maxChars={50}
          customClassNames={styles.inputField}
        />
      </div>
    </main>
  );
};