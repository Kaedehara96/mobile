import Logo from '../../assets/logo-Login.svg';
import User from '../../assets/User.svg';
import { Alert, Text, TouchableOpacity, View, TextInput} from 'react-native';


  
  export function Login (){

    const LoginScrenn = ({navigation}) =>{
        const [Username, setUsername]= useState('')
        const [password, setPassword]= useState('')
      }
      
      
      const handleLogin = () => {
        // Lógica de validação
        if (Username === 'usuarioteste' && password === 'senhateste') {
          // Navega para a tela de home se as credenciais forem válidas
          // navigation.navigate('Home');
          return(Alert.alert('Tudo certo!'))
        } else {
          Alert('Credenciais inválidas. Tente novamente.');
        }
      };

    return(
        <View className=' bg-gray-300 w-4/5 h-[560px] rounded-2xl items-center justify-center shadow-2xl shadow-gray-300 block'>
        <Logo></Logo>
        <User className='mt-8'></User>

        <TextInput className='w-3/5 text-center rounded-2xl mt-[42px] bg-slate-50'
        placeholder='Usuario'
        onChangeText={(Text)=> setUsername(Text)}
        />

        <TextInput className='w-3/5 text-center rounded-2xl mt-6 bg-slate-50'
        placeholder='Senha'
        onChangeText={(Text)=> setPassword(Text)}
        secureTextEntry={true}
        />
        <TouchableOpacity className='w-4/5 bg-[#E69B1B] items-center justify-center h-[42px] rounded-3xl mt-9'
        onPress={handleLogin}
        >
            <Text className='text-black font-bold text-base'>
              Login
            </Text>
        </TouchableOpacity>
       
      </View>
    )
  }