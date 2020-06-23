import React from 'react'
import { StyleSheet, View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform, NativeModules, Dimensions, SafeAreaView, Keyboard, Animated } from 'react-native'

const { StatusBarManager } = NativeModules

const screen = Dimensions.get('window')


export default class Messages extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Messages',
    headerStyle: {
      backgroundColor: 'rgb(0,0,0)',
    },
    headerTitleStyle: {
      fontSize: 20,
      color: 'rgb(255,255,255)'
    },
    headerTintColor: 'rgb(0,122,255)',
  })

  state = { 
    messages: [],
    keyboardPadding: new Animated.Value(0)
  }

  componentDidMount = () => {
    Platform.OS == 'ios' ? StatusBarManager.getHeight((statusBarFrameData) => {
      this.setState({statusBarHeight: statusBarFrameData.height})
    }) : null 
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
  }

  componentWillUnmount = () => {
    this.keyboardWillShowListener.remove()
    this.keyboardWillHideListener.remove()
  }

  keyboardWillShow = (e) => {
    Animated.timing(this.state.keyboardPadding, { toValue: 1, duration: 0}).start()
  }

  keyboardWillHide = () => {
    Animated.timing(this.state.keyboardPadding, { toValue: 0, duration: 0 }).start()
  }

  scrollStyles = (keyboardPadding) => {
    return { paddingBottom: keyboardPadding }
  }

  renderMessages = (messages) => {
    return messages.map((data, i) => <Message data={data} key={i}/>)
  } 

  addMessage = (message) => {
    let messageObj = {
      message: message,
      userId: 2,
      userName: 'Sean'
    }
    this.setState({messages: [...this.state.messages, messageObj]})
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView 
            style={styles.keyboardContainer}
            behavior={Platform.OS == 'ios' ? 'padding' : null}
            keyboardVerticalOffset={this.state.statusBarHeight + 44}
          >
            <ScrollView 
              ref={ref => this.scrollView = ref}
              onContentSizeChange={(contentWidth, contentHeight)=> {this.scrollView.scrollToEnd({animated: true})}}
            >
              <Animated.View style={this.scrollStyles(this.state.keyboardPadding)}>
                {this.renderMessages(this.state.messages)}
              </Animated.View>
            </ScrollView>
            <View style={styles.textBox}>
              <TextInput 
                style={styles.textInput}
                placeholder='Reply...'
                placeholderTextColor={'rgb(216,216,216)'}
                returnKeyType='done'
                autoCapitalize='none'
                selectionColor='#3490dc'
                multiline={true}
                blurOnSubmit={true}
                onSubmitEditing={(e)=> this.addMessage(e.nativeEvent.text)}
              />
            </View>  
          </KeyboardAvoidingView>  
      </SafeAreaView>
      )
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(0,0,0)'
    },
    keyboardContainer: {
      flex: 1,
      backgroundColor: 'rgb(0,0,0)'
    },
    textInput: {
      color: 'rgb(255,255,255)',
      fontSize: 18,
    },
    textBox: {
      borderColor: '#242F39',
      borderWidth: 1,
      borderRadius: 2, 
      padding: 10,
      paddingLeft: 16,
      backgroundColor: '#0A151F',
    },
})