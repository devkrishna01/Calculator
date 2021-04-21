/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {Appbar, Button} from 'react-native-paper';

export default class MathsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 0,
      value2: 0,
      sum: 0,
      minus: 0,
      division: 0,
      multiply: 0,
      currentTime: '',
    };
    this.ref_input2 = React.createRef();
    this.sumClick = this.sumClick.bind();
    this.minusClick = this.minusClick.bind();
    this.divisionClick = this.divisionClick.bind();
    this.multiplyClick = this.multiplyClick.bind();
  }

  componentWillMount() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    var today =
      date + '-' + month + '-' + year + ' ' + hour + ':' + min + ':' + sec;
    this.setState({
      currentTime: today,
    });
  }

  sumClick = () => {
    //alert('Button clicked! 101');
    this.setState({
      sum: parseInt(this.state.value1) + parseInt(this.state.value2),
    });
  };

  minusClick = () => {
    //alert('Button clicked! 101');
    this.setState({
      minus: parseInt(this.state.value1) - parseInt(this.state.value2),
    });
  };

  divisionClick = () => {
    //alert('Button clicked! 101');
    this.setState({
      division: parseInt(this.state.value1) / parseInt(this.state.value2),
    });
  };

  multiplyClick = () => {
    //alert('Button clicked! 101');
    this.setState({
      multiply: parseInt(this.state.value1) * parseInt(this.state.value2),
    });
  };

  render() {
    const _goBack = () => console.log('Went back');
    const _handleSearch = () => console.log('Searching');
    const _handleMore = () => console.log('Shown more');

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{paddingTop: 20}}>
          <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content
              title="Calculation"
              // subtitle="online"
            />
            {/* <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
          </Appbar.Header>
          <View style={{paddingHorizontal: 20}}>
            <ScrollView contentContainerStyle={{paddingBottom: 180}}>
              <View>
                <View style={styles.container}>
                  <Text style={styles.paragraph}>
                    Insert any text in below input
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#444',
                      fontWeight: 'bold',
                    }}>
                    {this.state.currentTime}
                  </Text>
                </View>
                <View style={styles.input_container}>
                  <Text style={styles.lable}>Enter First Number</Text>
                  <TextInput
                    value={this.state.value1}
                    keyboardType={'numeric'}
                    onChangeText={(value1) => this.setState({value1})}
                    placeholder={'First Number'}
                    style={styles.input}
                    returnKeyType={'next'}
                    autoFocus={false}
                    onSubmitEditing={() => this.ref_input2.current.focus()}
                  />
                  <Text style={styles.lable}>Enter Second Number</Text>
                  <TextInput
                    value={this.state.value2}
                    keyboardType={'numeric'}
                    onChangeText={(value2) => this.setState({value2})}
                    placeholder={'Second Number'}
                    style={styles.input}
                    returnKeyType={'done'}
                    ref={this.ref_input2}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                      backgroundColor: 'white',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'green',
                        fontSize: 16,
                        marginEnd: 20,
                        flex: 1,
                      }}>
                      Result is:
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                        flex: 1,
                      }}>
                      {/* {parseInt(this.state.value1) + parseInt(this.state.value2)} */}
                      {this.state.sum}
                    </Text>
                    <Button
                      style={{
                        flex: 1,
                      }}
                      mode="contained"
                      onPress={this.sumClick}
                      // onPress={() => alert('sdfsf')}
                    >
                      Addition
                    </Button>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                      backgroundColor: 'white',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'green',
                        fontSize: 16,
                        marginEnd: 20,
                        flex: 1,
                      }}>
                      Result is:
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                        flex: 1,
                      }}>
                      {/* {parseInt(this.state.value1) + parseInt(this.state.value2)} */}
                      {this.state.minus}
                    </Text>
                    <Button
                      style={{
                        flex: 1,
                      }}
                      mode="contained"
                      onPress={this.minusClick}
                      // onPress={() => alert('sdfsf')}
                    >
                      Subtraction
                    </Button>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                      backgroundColor: 'white',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'green',
                        fontSize: 16,
                        marginEnd: 20,
                        flex: 1,
                      }}>
                      Result is:
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                        flex: 1,
                      }}>
                      {/* {parseInt(this.state.value1) + parseInt(this.state.value2)} */}
                      {this.state.division}
                    </Text>
                    <Button
                      style={{
                        flex: 1,
                      }}
                      mode="contained"
                      onPress={this.divisionClick}
                      // onPress={() => alert('sdfsf')}
                    >
                      Division
                    </Button>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                      backgroundColor: 'white',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'green',
                        fontSize: 16,
                        marginEnd: 20,
                        flex: 1,
                      }}>
                      Result is:
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                        flex: 1,
                      }}>
                      {/* {parseInt(this.state.value1) + parseInt(this.state.value2)} */}
                      {this.state.multiply}
                    </Text>
                    <Button
                      style={{
                        flex: 1,
                      }}
                      mode="contained"
                      onPress={this.multiplyClick}
                      // onPress={() => alert('sdfsf')}
                    >
                      Multiply
                    </Button>
                  </View>
                </View>
                {/* <Image
                  source={{
                    uri:
                      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
                  }}
                  style={{
                    width: 400,
                    height: 400,
                  }}
                /> */}
              </View>
            </ScrollView>
          </View>
        </View>
        {/* <View style={styles.bottomView}>
          <Text style={styles.textStyle}>Checkout Order</Text>
        </View> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input_container: {
    alignItems: 'flex-start',
  },
  paragraph: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  lable: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  input: {
    width: 360,
    height: 44,
    padding: 10,
    marginTop: 10,
    borderColor: 'grey',
    color: 'black',
    fontSize: 14,
    borderWidth: 1,
  },
  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: '#EE5407',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
