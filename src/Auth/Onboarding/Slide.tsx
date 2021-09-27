import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
export const SLIDE_HEIGHT = 0.61 * height

interface SlideProps {
  label: string;
  right?: boolean
}

const styles = StyleSheet.create({
  container: {
    width
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
    transform: [
    ]
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: 'SFProText-Bold',
    color: 'white',
    textAlign: 'center'
  },
})

export default function Slide({ label, right }: SlideProps) {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100)/2 },
    { translateX: right ? width / 2 - 50 : -width / 2 +50 },
    { rotate: right ? '-90deg' : '90deg' }
  ]
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>

      <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  )
}
