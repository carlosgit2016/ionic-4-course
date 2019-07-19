import { Img } from '@fusuma/client';

<!-- What is Ionic? -->
<!-- sectionTitle: Introdução -->

<!-- classes:title -->
## Ionic
#### Framework capaz de construir aplicativos Hibridos,Nativos cross-platform e PWA.
#### Em suas versões mais novas já não é necessário a utilização do cordova.
#### Stack de dev suportada
<ul>
    <li> Angular </li>  
    <li> Vue JS </li>
    <li> React </li>
    <li> Javascript </li>
</ul>

---

<!-- sectionTitle: Aplicativos Cross vs Hibridos vs Nativos -->
## Tipos de aplicativos

<div class="grid">
  <div class="column">
    <h3>Native cross-platform</h3>
    <p>Pode ser escrito em HTML/CSS/Javascript e executa em qualquer sistema operacional suportado que provê uma API em sua linguagem nativa</p>
  </div>
  <div class="column">
    <h3>Hibridos</h3>
    <p>Executa em um container ou webview e fornece a capacidade de utilizar HTML/CSS/Javascript, geralmente usado através de um framework como Apache cordova, phonegap, titanium</p>
  </div>
  <div class="column">
    <h3>Nativos</h3>
    <p>É a forma mais comum de construir aplicativos para iOS e Android, é necessário utilizar linguagens e ferramentas nativas como: Objective C, Swift e Java com Android SDK.</p>
  </div>
</div>

#### Exemplos de repositorios: 
 - [Ionic](https://github.com/ionic-team/ionic) 
 - [React Native](https://github.com/facebook/react-native)
 - [Capacitor Ionic](https://github.com/ionic-team/capacitor)
 - [Cordova](https://cordova.apache.org/)

---

<!-- sectionTitle: Demonstração de um case com ionic 4 -->
## Case de exemplo
#### Implementação de um To Do List 
#### Get started
``` shell
#Instalar ionic cli
$ npm install ionic

#Começar um novo aplicativo
$ ionic start meuApp tabs

#Executando projeto
$ ionic serve

#Construindo projeto
$ npm i -g native-run
$ ionic cordova build <platform> (android | ios)
```

#### Também é possível utilizar com a nova API [Capacitor](https://capacitor.ionicframework.com)