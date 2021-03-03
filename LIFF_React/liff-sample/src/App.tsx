import React from 'react';
import liff from '@line/liff'; // 追加
import logo from './logo.svg';
import './App.css';
const liffId="1655712498-lQORQ1J0"

function App() {
  /* 追加: メッセージ送信 */
  const sendMessage = () => {
    liff.init({liffId}) // LIFF IDをセットする
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login({}) // ログインしていなければ最初にログインする
        } else if (liff.isInClient()) { // LIFFので動いているのであれば
          liff.sendMessages([{ // メッセージを送信する
            'type': 'text',
            'text': "You've successfully sent a message! Hooray!"
          }]).then(function() {
            window.alert('Message sent');
          }).catch(function(error) {
            window.alert('Error sending message: ' + error);
          });
        }
      })
  }

  /* 追加: UserProfileをAlertで表示 */
  const getUserInfo = () => {
    liff.init({liffId})
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login({}) // ログインしていなければ最初にログインする
        } else if (liff.isInClient()) {
          liff.getProfile()  // ユーザ情報を取得する
            .then(profile => {
              const userId: string = profile.userId
              const displayName: string = profile.displayName
              alert(`Name: ${displayName}, userId: ${userId}`)
            }).catch(function(error) {
              window.alert('Error sending message: ' + error);
            });
        }
      })

  }
  const openWindow = () =>{
    liff.openWindow({
      url:"https://google.com",
      external:true
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ここから、アプリを作っていこう！！
        </p>
         <button className="button" onClick={sendMessage}>send message</button> {/*// 追加 */}
        <button className="button" onClick={getUserInfo}>show user info</button> {/*// 追加 */}
        <button className="button" onClick={openWindow}>Googleを開くよ！！！</button> {/*// 追加 */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;