import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';

export default function App() {
  const colors = ['red', 'blue', 'yellow','red', 'blue', 'yellow']
  

  for(let i=0, tempcolors=colors, len=colors.length; i<len; i++){
    var rnd = Math.floor(Math.random() * tempcolors.length);
    
  }



  function changeColor(id){

    if(cards[id].status === 0){
      let newCards = [...cards]
      let item = {...newCards[id]}
      item.status = 1
      item.color = colors[rnd]
      newCards[id] = item
      setCards(newCards)
    }else if(cards[id].status === 1){
      let newCards = [...cards]
      let item = {...newCards[id]}
      item.status = 0
      item.color = 'gray'
      newCards[id] = item
      setCards(newCards)
    }
  }

  const [cards, setCards] = useState([
    {status: 0, color: 'gray'},
    {status: 0, color: 'gray'},
    {status: 0, color: 'gray'},
    {status: 0, color: 'gray'},
    {status: 0, color: 'gray'},
    {status: 0, color: 'gray'}
  ])

  return (
    <View style={styles.container}>
      <Card
        color = {cards[0].color}
        onPress = {(id) => changeColor(0)}
      />
       <Card
        color = {cards[1].color}
        onPress = {(id) => changeColor(1)}
      />
       <Card
        color = {cards[2].color}
        onPress = {(id) => changeColor(2)}
      />
       <Card
        color = {cards[3].color}
        onPress = {(id) => changeColor(3)}
      />
       <Card
        color = {cards[4].color}
        onPress = {(id) => changeColor(4)}
      />
       <Card
        color = {cards[5].color}
        onPress = {(id) => changeColor(5)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
});
