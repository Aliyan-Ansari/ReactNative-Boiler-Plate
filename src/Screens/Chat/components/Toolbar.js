import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import {darkMode} from '../../../theme/theme';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import FlashIcon from '../../../assets/flash.svg';

const ToolBar = ({
  onSendPress,
  onImageSelection,
  text,
  setText,
  openOfferSheet,
  selectedImages,
  removeImage,
}) => {
  const handleSendPress = () => {
    onSendPress();
  };
  return (
    <View
      style={{
        ...styles.container,
        height: selectedImages?.length > 0 ? 190 : 130,
      }}>
      <View style={styles.actionsWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.imagesContainer}>
          {selectedImages?.map((imageUri, index) => (
            <View style={styles.imageWrapper}>
              <TouchableOpacity
                style={styles.crossChip}
                onPress={() => removeImage(index)}>
                <AntDesign name="close" />
              </TouchableOpacity>
              <Image
                key={index}
                source={{uri: imageUri}}
                style={styles.selectedImage}
              />
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Type here....."
            placeholderTextColor={darkMode.black5A}
            cursorColor={darkMode.primary}
            multiline
            numberOfLines={2}
            value={text}
            onChangeText={textData => setText(text)}
          />
        </View>
        <View style={styles.accessory}>
          <TouchableOpacity onPress={onImageSelection}>
            <Feather name="camera" size={24} color={darkMode.black5A} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createOfferButton}
            onPress={openOfferSheet}>
            {/* <FlashIcon /> */}
            <Text style={styles.createOfferLabel}>Create an offer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSendPress}>
            <Text style={styles.sendLabel}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ToolBar;
