import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class CustomButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.customButton}
        onPress={this.props.onPress}
      >
        <Text style={styles.customButtonText}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: '#16a085',
    borderRadius: 3,
    margin: 5,
    padding: 5,
  },
  customButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomButton;
