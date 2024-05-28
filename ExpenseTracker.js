import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ExpenseTracker = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSaveExpense = () => {
    // Here you can handle saving the expense to a database or perform any other actions
    console.log("Amount:", amount);
    console.log("Category:", category);
    console.log("Date:", date);
    console.log("Photo:", photo);
  };

  const handleChoosePhoto = () => {
    // Implement photo selection logic here using libraries like react-native-image-picker
    // For simplicity, let's just set a placeholder photo for now
    setPhoto('https://via.placeholder.com/150');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Amount spent"
        value={amount}
        onChangeText={text => setAmount(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Category"
        value={category}
        onChangeText={text => setCategory(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={text => setDate(text)}
        keyboardType="numeric"
      />
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
      {photo && <Image source={{ uri: photo }} style={{ width: 150, height: 150, marginTop: 10 }} />}
      <Button title="Save Expense" onPress={handleSaveExpense} />
    </View>
  );
};

export default ExpenseTracker;
