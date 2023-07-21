import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Svg, Path, Circle } from 'react-native-svg'

const HomeImage = (props) => {
    return (
        <View>
            <Svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="25" cy="25" r="25" fill="#FFECD0" />
                <Path d="M22.131 14.5599C22.3705 14.48 22.6294 14.48 22.8689 14.5599L29.4999 16.7702L34.5954 15.0717C36.1063 14.5681 37.6666 15.6927 37.6666 17.2853V31.1591C37.6666 32.1635 37.0239 33.0551 36.0711 33.3727L29.8689 35.4401C29.6294 35.52 29.3705 35.52 29.131 35.4401L22.4999 33.2298L17.4045 34.9283C15.8935 35.4319 14.3333 34.3073 14.3333 32.7147V18.8409C14.3333 17.8365 14.9759 16.9449 15.9287 16.6273L22.131 14.5599ZM23.6666 31.1591L28.3333 32.7147V18.8409L23.6666 17.2853V31.1591ZM21.3333 17.2853L16.6666 18.8409V32.7147L21.3333 31.1591V17.2853ZM30.6666 18.8409V32.7147L35.3333 31.1591V17.2853L30.6666 18.8409Z"
                    fill={props.color} />
            </Svg>

        </View>
    )
}

export default HomeImage

const styles = StyleSheet.create({})