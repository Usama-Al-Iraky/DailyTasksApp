import React from 'react'
import { Text, View } from 'react-native'
import stylesToDo from '../Styles/toDoStyle'
const NoToDo = () => {
  return (
    <View style={stylesToDo.noToDo.container} >
        <Text style={stylesToDo.noToDo.text}>
            There is no To Do
        </Text>
    </View>
  )
}
export default NoToDo
