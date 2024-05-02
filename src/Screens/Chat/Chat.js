import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  GiftedChat,
  InputToolbar,
  Composer,
  Send,
} from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icon library
import {useDarkMode} from '../../ThemeContext';
import {darkMode, lightMode} from '../../theme/theme';
import {getStyles} from './style';

const ChatScreen = () => {
  const {isDarkMode} = useDarkMode();
  const theme = isDarkMode ? darkMode : lightMode;
  const [styles, setStyles] = useState(getStyles(theme));
  const [messages, setMessages] = useState([
    {
      _id: '1d051119-255e-419c-ac7a-07b6528f4282',
      createdAt: '2024-05-02T14:00:24.592Z',
      text: 'Hello How can i Help you?',
      user: {
        _id: 2,
        name: 'G P T',
        // avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ]);

  useEffect(() => {
    setStyles(getStyles(theme));
  }, [isDarkMode, theme]);

  const onSend = newMessages => {
    console.log('--------- New Message ---------', newMessages);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
    // Here you can handle sending messages to your backend service if needed
  };

  const renderInputToolbar = props => {
    return <InputToolbar {...props} containerStyle={styles.inputToolbar} />;
  };

  const renderComposer = props => {
    return (
      <Composer
        {...props}
        textInputStyle={styles.input}
        placeholder="Type your message..."
      />
    );
  };

  const renderSend = props => {
    return (
      <Send {...props}>
        <TouchableOpacity style={styles.sendButtonContainer}>
          <Icon name="send" size={24} color={theme.buttonBackgroundColor} />
        </TouchableOpacity>
      </Send>
    );
  };

  const renderEmojiButton = () => {
    return (
      <TouchableOpacity style={styles.emojiButtonContainer}>
        <Icon name="smile-o" size={24} color={theme.buttonBackgroundColor} />
      </TouchableOpacity>
    );
  };

  const renderAttachmentButton = () => {
    return (
      <TouchableOpacity style={styles.attachmentButtonContainer}>
        <Icon name="paperclip" size={24} color={theme.buttonBackgroundColor} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1,
        }}
        bottomOffset={-40}
        renderActions={renderAttachmentButton}
        renderInputToolbar={renderInputToolbar}
        renderComposer={renderComposer}
        renderSend={renderSend}
        // renderActions={renderEmojiButton} // Add emoji button
      />
    </View>
  );
};

export default ChatScreen;
