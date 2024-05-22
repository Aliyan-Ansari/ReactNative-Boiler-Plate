import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, useWindowDimensions} from 'react-native';
import {
  GiftedChat,
  InputToolbar,
  Composer,
  Send,
  Bubble,
} from 'react-native-gifted-chat';
import {TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDarkMode} from '../../ThemeContext';
import {darkMode, lightMode} from '../../theme/theme';
import {getStyles} from './style';
import CustomText from '../../Components/CustomText/CustomText';
import ToolBar from './components/Toolbar';

const HeaderTitle = ({styles, theme, deviceWidth}) => (
  <View style={[styles.headerBox]}>
    <CustomText style={styles.title}>Chat with GPT</CustomText>
    <TouchableOpacity style={styles.sendButtonContainer}>
      <Icon name="dots-vertical" size={28} color={theme.white} />
    </TouchableOpacity>
  </View>
);

const ChatScreen = () => {
  const {isDarkMode} = useDarkMode();
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const theme = isDarkMode ? darkMode : lightMode;
  const [styles, setStyles] = useState(getStyles(theme));
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([
    {
      _id: '1d051119-255e-419c-ac7a-07b6528f4282',
      createdAt: '2024-05-02T14:00:24.592Z',
      text: 'Hello How can i Help you? ',
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

  // const onSend = newMessages => {
  //   setTimeout(() => {
  //     // Simulating a response from the chatbot after 3 seconds
  //     setMessages(previousMessages =>
  //       GiftedChat.append(previousMessages, [
  //         {
  //           _id: Math.random().toString(),
  //           createdAt: new Date(),
  //           text: 'This is a random reply from GPT after 3 seconds.',
  //           user: {
  //             _id: 2,
  //             name: 'G P T',
  //           },
  //         },
  //       ]),
  //     );
  //   }, 3000);

  //   setMessages(previousMessages =>
  //     GiftedChat.append(previousMessages, newMessages),
  //   );
  // };

  const onSend = () => {
    if (text.length > 0) {
      const newMessages = [
        {
          _id: messages.length + 1,
          text: text,
          createdAt: new Date(),
          user: {_id: 1},
        },
      ];
      setMessages(GiftedChat.append(messages, newMessages));
      setText('');
    }
  };

  // const renderInputToolbar = props => {
  //   return (
  //     <InputToolbar
  //       {...props}
  //       containerStyle={styles.inputContainer}
  //       primaryStyle={{alignItems: 'center'}}>
  //       <TextInput
  //         style={styles.inputField}
  //         value={text}
  //         onChangeText={setText}
  //         placeholder="Type a message..."
  //         multiline
  //       />
  //       <TouchableOpacity onPress={onSend} style={styles.sendButton}>
  //         <Icon name="send" size={24} color="#000" />
  //       </TouchableOpacity>
  //     </InputToolbar>
  //   );
  // };

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
          <Icon name="send" size={20} color={theme.buttonBackgroundColor} />
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

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <HeaderTitle styles={styles} theme={theme} deviceWidth={width} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        // onSend={onSend}
        user={{
          _id: 1,
          name: 'AA',
        }}
        // bottomOffset={-tabBarHeight + 20}
        renderActions={renderAttachmentButton}
        // renderInputToolbar={renderInputToolbar}
        renderInputToolbar={() => null}
        minInputToolbarHeight={0}
        renderComposer={renderComposer}
        // renderSend={renderSend}
        renderBubble={renderBubble}
      />
      {/* <CustomToolBar
        text={text}
        setText={setText}
        onSend={onSend}
        styles={styles}
      /> */}
      <ToolBar
        text={text}
        setText={setText}
        onSend={onSend}
        styles={styles}
        theme={theme}
      />
    </View>
  );
};

export default ChatScreen;
