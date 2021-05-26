import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PushNotification from 'react-native-push-notification';

import {
  showNotification,
  handleCancel,
  handleScheduledNotification,
} from './src/notif';

const App = () => {
  // const [channel, setChannel] = useState();
  const channel = 'notif';
  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'notif', // (required)
        channelName: 'My Notification Channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }, []);

  useEffect(() => {
    PushNotification.getChannels((channel_ids) => {
      console.log(channel_ids); // ['channel_id_1']
      // setChannel(channel_ids[0]);
    });
  }, []);

  // console.log(channel);
  return (
    <View style={styles.container}>
      <Text>Push Notification</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() =>
          showNotification('Hello', 'This is Notification', channel)
        }>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>Click to get Notification</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() =>
          handleScheduledNotification(
            'Hello',
            'Notification from the past',
            channel,
          )
        }>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>
            Click to get Notification after 5 seconds
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} onPress={handleCancel}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>
            Click to cancel all Notification
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 16,
    backgroundColor: 'blue',
    borderRadius: 24,
    marginTop: 10,
  },
  buttonTitle: {
    color: 'white',
  },
});
