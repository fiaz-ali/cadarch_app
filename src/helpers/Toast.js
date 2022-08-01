import Toast from 'react-native-simple-toast'

export const ToastMessage = message => {
  Toast.showWithGravity(`${message}`, Toast.SHORT, Toast.CENTER)
}
