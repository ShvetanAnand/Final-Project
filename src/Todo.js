 import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Task from './task';
export default class Todo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            taskArray: [],
            taskText: ''
        }
    }

    render() {

        let tasks = this.state.taskArray.map((val, key) => {
            return <Task key={key} keyval={key} val={val}
                deleteMethod={() => this.deleteTask(key)}
            />
        })


        return (
            <View style={styles.container}>
                <View style={styles.header}>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {tasks}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(taskText) => this.setState({ taskText })}
                        value={this.state.taskText}
                        placeholder='Add Task'
                        placeholderTextColor='cyan'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>

                <TouchableOpacity onPress={this.addTask.bind(this)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add to my Work</Text>
                </TouchableOpacity>

            </View>
        );
    }
    addTask() {
        if (this.state.taskText) {
            var date = new Date();

            this.state.taskArray.push({
               'date' : date.getFullYear()+
               '/' +(date.getMonth() + 1)+
               '/' + date.getDate(),
               'task':this.state.taskText
            });

            this.setState({taskArray: this.state.taskArray});
            this.setState({taskText:this.state.taskText});
        }

    }

    deleteTask(key){
        this.state.taskArray.splice(key,1);
        this.setState({taskArray:this.state.taskArray});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
    },

    scrollContainer: {
        flex: 1,
        marginBottom: 100,
        color:'black'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        alignSelf: 'stretch',
        color: 'cyan',
        padding: 20,
        backgroundColor: 'black',
        borderTopWidth: 1,
        borderTopColor: 'cyan',
        borderBottomWidth: 1,
        borderBottomColor: 'cyan',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: 'black',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: 'deeppink',
        fontSize: 16,
    },
});