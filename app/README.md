# React-native App no formato para mobile

### Configurar o ambiente para o desenvolvimento android
```
$ export ANDROID_HOME=/home/abner/Android/Sdk
```
```
$ export PATH=$PATH:$ANDROID_HOME/tools
```
```
$ export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Instalando as ferramentas

```
$ /home/abner/Android/Sdk/tools/bin/sdkmanager "platform-tools" "platforms;android-27" "build-tools;27.0.3"
```

### Habilitando a depuração usb

```
$ echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="1662", MODE="0666", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android-usb.rules
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

### Baixando a versão do android
```
$ sudo npm install @react-native-community/cli-platform-android@2.7.0
```

### Execução na plataforma android
```
$ sudo yarn react-native run-android
```