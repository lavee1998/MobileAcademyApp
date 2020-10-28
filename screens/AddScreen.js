import React, { Component } from 'react';
import { Picker, View } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

export default class AddScreen extends Component {
    state = {
        current: '1',  
    }

    render() {
         return(
            <View>
                <Card>
                    <Card.Title title="Send new perception" />
                    <Card.Content>
                        <Title>1. Choose the type</Title>
                        <Picker selectedValue={this.state.current}
                                onValueChange={value => this.setState({ current: value })} 
                                style={{ height: 50, width: 200, paddingTop: 20 }}>
                            <Picker.Item label="Construction" value="1" />
                            <Picker.Item label="Traffipax" value="2" />
                            <Picker.Item label="Incident" value="3" />
                        </Picker>
                        <Title>2. Choose the location</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button>Send</Button>
                    </Card.Actions>
                </Card>
            </View>
        );
    }
}