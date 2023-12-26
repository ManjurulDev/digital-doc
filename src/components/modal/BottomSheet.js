import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,Button} from 'react-native';


const BottomSheet = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.modal}>
                <Button
                    onPress={() => setModalVisible(!modalVisible)}
                    title="Hide modal"/>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    modal: {
        top: '50%',
        height: '50%',
    },
});

export default BottomSheet;