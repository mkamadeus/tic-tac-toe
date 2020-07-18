import React from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';

const BaseModal = (props) => {
  const {visible, children, setVisible} = props;

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      style={styles.modelOverlay}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
              }}>
              <View>
                <FontAwesomeIcon
                  icon={
                    require('@fortawesome/free-solid-svg-icons/faTimes').faTimes
                  }
                  size={24}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.modalContent}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.7)',
    padding: 25,
  },
  modal: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  modalHeader: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: 15,
    paddingBottom: 0,
  },
  modalContent: {
    padding: 20,
  },
});

export default BaseModal;
