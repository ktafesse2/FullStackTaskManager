import { 
  View, 
  Text, 
  TextInput, 
  SafeAreaView, 
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  useColorScheme,
  StyleSheet
 } from 'react-native';

 import { Link } from 'expo-router';

 type AuthFormProps = {
  type: 'login' | 'register'
 };
 
 export function AuthForm({ type }: AuthFormProps) {
  const colorScheme = useColorScheme();

  // Define colors based on theme
  const colors = {
    background: colorScheme === 'dark' ? '#000' : '#fff',
    text: colorScheme === 'dark' ? '#fff' : '#000',
    input: {
      background: colorScheme === 'dark' ? '#1a1a1a' : '#fff',
      border: colorScheme === 'dark' ? '#333' : '#ccc',
      text: colorScheme === 'dark' ? '#fff' : '#000',
    },
    button: {
      background: '#2196F3',  // Keep button color consistent
      text: '#fff'           // Keep button text white for both themes
    },
    registerText: colorScheme === 'dark' ? '#888' : '#666'
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={[styles.safeArea, {backgroundColor: colors.background}]}>
          <View style={styles.contentContainer}>
            
            {/* Email Input */}
            <View style={styles.inputContainer}>
              <TextInput 
                placeholder="Email"
                placeholderTextColor={colorScheme === 'dark' ? '#666' : '#999'}
                style={[
                  styles.input,
                  {
                    borderColor: colors.input.border,
                    backgroundColor: colors.input.background,
                    color: colors.input.text
                  }
                ]}
              />
            </View>
            
            {/* Password Input */}
            <View style={styles.inputContainer}>
              <TextInput 
                placeholder="Password"
                placeholderTextColor={colorScheme === 'dark' ? '#666' : '#999'}
                secureTextEntry
                style={[
                  styles.input,
                  {
                    borderColor: colors.input.border,
                    backgroundColor: colors.input.background,
                    color: colors.input.text
                  }
                ]}
              />
            </View>
            
            {/* Login/Register Button */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: colors.button.background }]}  
              >
                <Text style={styles.buttonText}>
                  {type === 'login' ? 'Login': 'Register'}
                </Text>
              </TouchableOpacity>
            </View>
            
            {/* Reroute Link */}
            <View style={styles.registerTextContainer}>
              <Link
                href={type === 'login' ? '/(auth)/register' : '/(auth)'}
                style={[
                  styles.registerText,
                  {
                    color: colors.registerText,
                    textDecorationLine: 'underline'
                  }
                ]}
              >
                {type === 'login' ? "Don't have an account?" : "Already have an account?"}
              </Link>
            </View>

          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    width: '100%',
    justifyContent: 'center',
    gap: 12,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    width: '100%',
    fontSize: 14,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 8,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  registerTextContainer: {
    alignItems: 'center',
  }, 
  registerText: {
    fontSize: 14,
  }
});