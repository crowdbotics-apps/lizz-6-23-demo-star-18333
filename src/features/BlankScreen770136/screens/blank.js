import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = { Radio_12: true }

  render = () => (
    <View
      style={{
        overflow: "visible",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderStyle: "solid",
        backgroundSize: "auto"
      }}
    >
      <Text style={{ overflow: "visible", borderStyle: "solid" }}>Text</Text>
      <View
        style={{
          overflow: "visible",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
          borderStyle: "solid",
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Button
            style={{
              overflow: "visible",
              borderStyle: "solid",
              backgroundColor: "#3366FF"
            }}
            onPress={() => alert("Pressed!")}
          >
            Button
          </Button>
        </View>
        <View
          style={{
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Button
            style={{
              overflow: "visible",
              borderStyle: "solid",
              backgroundColor: "#f96d3e"
            }}
            onPress={() => alert("Pressed!")}
          >
            Button
          </Button>
        </View>
      </View>
      <Slider
        value="50"
        minimalValue="0"
        maximumValue="100"
        step="1"
        disabled={false}
        style={{ overflow: "visible", borderStyle: "solid" }}
      />
      <Radio
        text="Custom label"
        disabled={false}
        style={{ overflow: "visible", borderStyle: "solid" }}
        checked={this.state.Radio_12}
        onChange={nextChecked => this.setState({ Radio_12: nextChecked })}
      />
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
