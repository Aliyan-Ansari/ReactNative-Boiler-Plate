import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {darkMode} from '../../../theme/theme';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
// import FlashIcon from '../../../assets/flash.svg';

const ToolBar = ({
  onSend,
  onImageSelection,
  text,
  setText,
  openOfferSheet,
  selectedImages,
  removeImage,
  theme,
}) => {
  const [inputHeight, setInputHeight] = useState(40); // Set initial height to match a single line

  const handleSendPress = () => {
    onSend();
  };

  return (
    <View
      style={{
        ...styles.container,
        // height: selectedImages?.length > 0 ? 190 : inputHeight + 45, // Adjust the container height based on input
      }}>
      <View style={styles.actionsWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.imagesContainer}>
          {selectedImages?.map((imageUri, index) => (
            <View style={styles.imageWrapper} key={index}>
              <TouchableOpacity
                style={styles.crossChip}
                onPress={() => removeImage(index)}>
                <Icon name="close" />
              </TouchableOpacity>
              <Image source={{uri: imageUri}} style={styles.selectedImage} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <View style={styles.textBox}>
            <TouchableOpacity onPress={onImageSelection}>
              <Feather name="camera" size={24} color={darkMode.black5A} />
            </TouchableOpacity>
            <TextInput
              placeholder="Type here...."
              placeholderTextColor={darkMode.black5A}
              cursorColor={darkMode.primary}
              multiline
              onContentSizeChange={e =>
                setInputHeight(e.nativeEvent.contentSize.height)
              }
              style={{
                height: text.length === 0 ? 40 : Math.min(inputHeight, 150), // Set maximum height limit
                maxHeight: 150,
                flex: 1,
              }}
              value={text}
              onChangeText={textData => setText(textData)}
            />
          </View>
          <TouchableOpacity onPress={handleSendPress}>
            <Icon name="send" size={20} color={theme.buttonBackgroundColor} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ToolBar;
