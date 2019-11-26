# React-native App no formato para mobile

## Passos numerados para a instalação do app via USB
#### 1. Baixar o SDK;
#### 2. Instalar as ferramentas do SDK;
#### 3. Configurar as variáveis de ambiente do sistema operacional;
#### 4. Copiar a pasta 'SDK' para a pasta android do root do projeto;
#### 5. Gerar a chave de assinatura para instalar o aplicativo;
#### 1. Baixar os módulos do NodeJS;
#### 1. Instalar o aplicativo no celular via USB com o comando ```react-native run-android```;

### Download the latest version
```
$ sudo npm install -g react-native-cli
```

### Fazer o download do [Android SDK](https://developer.android.com/studio/#downloadshttps://developer.android.com/studio/#downloads) e salvar a pasta '/sdk' em 'android/sdk' na pasta root do projeto apenas para Microsoft Windows

#### Instalando as ferramentas
```
$ android/sdk/tools/bin/sdkmanager "platform-tools" "platforms;android-27" "build-tools;27.0.3"
```

#### Configurar o ambiente para o desenvolvimento android
```
$ export ANDROID_HOME=/home/abner/android/sdk
```
```
$ export PATH=$PATH:$ANDROID_HOME/tools
```
```
$ export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Habilitando a depuração usb no sistema android
```
$ lsusb
```
```
$ echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="<your_phone_id>", MODE="0666", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android-usb.rules
```
```
$ adb devices
```

### Gerar o arquivo para debug
```
$ keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

### Baixar as dependências
```
$ yarn install
```

### Adiocione o controle de navegação
```
$ yarn add react-navigation react-native-gesture-handler react-native-reanimated
```

### Adicionando o controle da comunicação com a API
```
$ yarn add axios
```
```
$ sudo react-native axios
```

### Melhorando o ASYNC e AWAIT
```
$ yarn add @react-native-community/async-storage
```
```
$ react-native link @react-native-community/async-storage
```

### Baixando a versão do android
```
$ sudo npm install @react-native-community/cli-platform-android@2.7.0 <android_version>
```

### Execução na plataforma android
```
$ sudo yarn react-native run-android
```

### Contruindo o APK

Criar o arquivo para chaves com o debug, e executar este comando na pasta do projeto gradle android no app em react
```
$ ./gradlew assembleRelease
```

### No caso de erros para construir o APK (JS server carregando infinitamente)
```
$ sudo npm i jetifier
```
```
$ sudo npx jetify

```
### No caso de erros para construir o APK (Modo interativo inicia, mas dá erro 500 no APK instalado)
```
Reiniciar a máquina
```

### No caso de erros para construir o APK ('deprecated gradle features were used in this build')
```
Assinatura do aplicativo já instalado no celular diferente da atual sendo usada no build,
desinstalar a versão do App no celular e reinstalar
```
### Funcionamento do Google Maps pelo [artigo explicativo](https://medium.com/nerdzao/utilizando-rotas-com-a-google-maps-api-no-react-native-69a05a434ab5)

```
$ sudo yarn add react-native-maps
```
```
$ react-native link react-native-maps
```

### Pacotes Adicionais para o funcionamento das rotas

```
$ sudo yarn add react-native-maps-directions
```
```
$ sudo yarn add react-native-geocoding
```
```
$ sudo yarn add react-native-google-maps-directions
```
