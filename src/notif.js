import PushNotification from 'react-native-push-notification';

const showNotification = (title, message, channelId) => {
  // console.log(channelId);
  PushNotification.localNotification({
    channelId,
    title,
    message,
  });
};

const handleScheduledNotification = (title, message, channelId) => {
  PushNotification.localNotificationSchedule({
    channelId,
    title,
    message,
    date: new Date(Date.now() + 5 * 1000),
  });
};

const handleCancel = () => {
  PushNotification.cancelAllLocalNotifications();
};

export { showNotification, handleCancel, handleScheduledNotification };
