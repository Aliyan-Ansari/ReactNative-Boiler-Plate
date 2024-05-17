import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  GiftedChat,
  InputToolbar,
  Composer,
  Send,
  Bubble,
} from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDarkMode} from '../../ThemeContext';
import {darkMode, lightMode} from '../../theme/theme';
import {getStyles} from './style';
import CurvedBackground from '../../Components/CurvedBackground/CurvedBackground';

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
      },
    },
    {
      _id: '1d051119-255e-419c-ac7a-07b6528f4283',
      createdAt: '2024-05-02T14:01:24.592Z',
      text: 'I will ask you some questions give me the answer',
      user: {
        _id: 1,
        name: 'AA',
      },
    },
    {
      _id: '1d051119-255e-419c-ac7a-07b6528f4284',
      createdAt: '2024-05-02T14:02:24.592Z',
      text: 'Sure! Ask me anything.',
      user: {
        _id: 2,
        name: 'G P T',
      },
    },
    {
      _id: '1d051119-255e-419c-ac7a-07b6528f4285',
      createdAt: '2024-05-02T14:02:24.592Z',
      text: 'Thanks for your response',
      user: {
        _id: 1,
        name: 'AA',
      },
    },
    {
      _id: '1d051119-255e-419c-ac7a-07b6528f4286',
      createdAt: '2024-05-02T14:03:24.592Z',
      text: 'Anytime! Have a great day.',
      user: {
        _id: 2,
        name: 'G P T',
      },
    },
  ]);

  useEffect(() => {
    setStyles(getStyles(theme));
  }, [isDarkMode, theme]);

  const onSend = newMessages => {
    setTimeout(() => {
      // Simulating a response from the chatbot after 3 seconds
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [
          {
            _id: Math.random().toString(),
            createdAt: new Date(),
            text: 'This is a random reply from GPT after 3 seconds.',
            user: {
              _id: 2,
              name: 'G P T',
            },
          },
        ]),
      );
    }, 3000);

    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
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

  const renderAttachmentButton = () => {
    return (
      <TouchableOpacity style={styles.attachmentButtonContainer}>
        <Icon name="paperclip" size={24} color={theme.buttonBackgroundColor} />
      </TouchableOpacity>
    );
  };

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#5DBEA3', // Set background color for your side of chat
          },
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages.slice().reverse()}
        onSend={onSend}
        user={{
          _id: 1,
        }}
        bottomOffset={-40}
        renderActions={renderAttachmentButton}
        renderInputToolbar={renderInputToolbar}
        renderComposer={renderComposer}
        renderSend={renderSend}
        renderBubble={renderBubble}
      />
    </View>
  );
};

export default ChatScreen;
