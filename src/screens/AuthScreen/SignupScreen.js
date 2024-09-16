// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Button from '../../components/Button';

// const SignupScreen = ({ navigation }) => {
//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState(''); 
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [agreeTerms, setAgreeTerms] = useState(false);

//     const handleSignup = () => {
//         console.log('signup press')
//         // Add signup logic here
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <Text style={styles.title}>Sign Up</Text>
//             <View style={styles.inputContainer}>
//                 <Text style={styles.checkboxLabel}>Full Name</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter Full Name"
//                     placeholderTextColor="#888"
//                     value={fullName}
//                     onChangeText={setFullName}
//                 />
//                 <Text style={styles.checkboxLabel}>Email</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter Email"
//                     placeholderTextColor="#888"
//                     value={email}
//                     onChangeText={setEmail}
//                     keyboardType="email-address"
//                 />
//                 <Text style={styles.checkboxLabel}>Password</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter Password"
//                     placeholderTextColor="#888"
//                     value={password}
//                     onChangeText={setPassword}
//                     secureTextEntry
//                 />
//                  <Text style={styles.checkboxLabel}>Confirm Password</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Confirm Password"
//                     placeholderTextColor="#888"
//                     value={confirmPassword}
//                     onChangeText={setConfirmPassword}
//                     secureTextEntry
//                 />
//             </View>
//             <View style={styles.checkboxContainer}>
//                 <CheckBox
//                     value={agreeTerms}
//                     onValueChange={setAgreeTerms}
//                     boxType="square"
//                     tintColors={{ true: 'orange', false: '#888' }}
//                     style={styles.checkbox}
//                 />
//                 <Text style={styles.checkboxLabel}>
//                     I agree with <Text style={styles.linkText}>Terms of Service</Text> and <Text style={styles.linkText}>Privacy Policy</Text>
//                 </Text>
//             </View>
//             <Button
//                 title="Register"
//                 onPress={handleSignup}
//                 disabled={!agreeTerms}
//                 style={{ backgroundColor: agreeTerms ? 'orange' : '#888' }}
//             />
//             {/* <TouchableOpacity
//                 style={[styles.button, { backgroundColor: agreeTerms ? 'orange' : '#888' }]}
//                 onPress={handleSignup}
//                 disabled={!agreeTerms}
//             >
//                 <Text style={styles.buttonText}>Register</Text>
//             </TouchableOpacity> */}
//             <View style={styles.socialLoginContainer}>
//                 <Text style={styles.orText}>Or sign up with</Text>
//                 <Icon
//                     name="google-plus-circle"
                    
//                     size={40}
//                     color='white'
                   
//                     onPress={() => {}}
//                 >
                    
//                 </Icon>
//             </View>
//             <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
//                 <Text style={styles.signInText}>
//                 Have an account? <Text style={styles.linkText}>Sign In</Text>
//                 </Text>
//             </TouchableOpacity>
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         padding: 20,
//         backgroundColor: '#1c161b',
//     },
//     title: {
//         fontSize: 32,
//         color: 'orange',
//         fontWeight: 'bold',
//         marginBottom: 20,
//         textAlign: 'center',
//     },
//     inputContainer: {
//         marginBottom: 20,
//     },
//     input: {
//         backgroundColor: '#333',
//         color: 'white',
//         padding: 10,
//         borderRadius: 10,
//         marginBottom: 15,
//         fontSize: 16,
//     },
//     checkboxContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     checkbox: {
//         alignSelf: 'center',
//     },
//     checkboxLabel: {
//         color: 'white',
//         fontSize: 12,
//         // marginLeft: 10,
//     },
//     linkText: {
//         color: 'orange',
//         fontWeight: 'bold',
//     },
//     button: {
//         padding: 15,
//         borderRadius: 30,
//         alignItems: 'center',
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     socialLoginContainer: {
//         marginVertical: 20,
//         alignItems: 'center',
//     },
//     orText: {
//         color: 'white',
//         fontSize: 14,
//         marginBottom: 10,
//     },
//     signInText: {
//         color: 'white',
//         textAlign: 'center',
//         marginTop: 20,
//     },
// });

// export default SignupScreen;



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TextInput as PaperTextInput } from 'react-native-paper';
import Button from "../../components/Button";
import Images from '../../constants/Image';
const SignupScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignup = () => {
    console.log('signup press');
    // Add signup logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <PaperTextInput
          label="Full Name"
          mode="outlined"
          placeholder="Enter Full Name"
          value={fullName}
          onChangeText={setFullName}
          theme={{
            colors: { primary: 'orange', placeholder: '#888', text: 'white' },
          }}
          style={styles.input}
          outlineColor="#888"
          activeOutlineColor="orange"
        />
        <PaperTextInput
          label="Email"
          mode="outlined"
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          theme={{
            colors: { primary: 'orange', placeholder: '#888', text: 'white' },
          }}
          style={styles.input}
          outlineColor="#888"
          activeOutlineColor="orange"
        />
        <PaperTextInput
          label="Password"
          mode="outlined"
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          right={
            <PaperTextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          theme={{
            colors: { primary: 'orange', placeholder: '#888', text: 'white' },
          }}
          style={styles.input}
          outlineColor="#888"
          activeOutlineColor="orange"
        />
        <PaperTextInput
          label="Confirm Password"
          mode="outlined"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
          right={
            <PaperTextInput.Icon
              icon={showConfirmPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          }
          theme={{
            colors: { primary: 'orange', placeholder: '#888', text: 'white' },
          }}
          style={styles.input}
          outlineColor="#888"
          activeOutlineColor="orange"
        />
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={agreeTerms}
          onValueChange={setAgreeTerms}
          tintColors={{ true: 'orange', false: '#888' }}
          style={styles.checkbox}
        />
        {/* <Text style={styles.checkboxLabel}>
          I agree with <Text style={styles.linkText}>Terms of Service</Text> and <Text style={styles.linkText}>Privacy Policy</Text>
        </Text> */}
        <Text style={styles.checkboxLabel}>
  I agree with{' '}
  <Text
    style={styles.linkText}
    onPress={() => navigation.navigate('TermServices')}
  >
    Terms of Service
  </Text>{' '}
  and{' '}
  <Text
    style={styles.linkText}
    onPress={() => navigation.navigate('PrivacyPolicy')}
  >
    Privacy Policy
  </Text>
</Text>

      </View>
     
      <View style={{ paddingTop: 70 }}></View>
          <Button
                title="Register"
                onPress={handleSignup}
                disabled={!agreeTerms}
                style={{ backgroundColor: agreeTerms ? 'orange' : '#888' }}
            />
      <View style={styles.socialLoginContainer}>
        <Text style={styles.orText}>Or sign up with</Text>
        <Image source={Images.Google} />
      
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.signInText}>
          Have an account? <Text style={styles.linkText}>Sign In</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#1c161b',
  },
  title: {
    fontSize: 32,
    color: 'orange',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    marginBottom: 15,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  checkboxLabel: {
    color: 'white',
    fontSize: 12,
  },
  linkText: {
    color: 'orange',
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  orText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
  },
  signInText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SignupScreen;
