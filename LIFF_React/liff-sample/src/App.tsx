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
        } else if (liff.isInClient()) { // LIFFが動いているのであれば
          liff.sendMessages([{ // メッセージを送信する
            'type': 'text',
            'text': "You've successfully sent a message! Hooray!"
          },{
            'type':'image',
            'originalContentUrl':'https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png',
            'previewImageUrl':'https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s400/onepiece01_luffy.png'
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
        if (liff.isInClient()) {
          liff.getProfile()  // ユーザ情報を取得する
            .then(profile => {
              const userId: string = profile.userId
              const displayName: string = profile.displayName
              const screenWhere=liff.getContext();
              window.alert(`Name: ${displayName} ¥n userId: ${userId} ¥n screenWhere:${screenWhere}`);
              
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

  const shareTargetPicker = () =>{
    if (liff.isApiAvailable('shareTargetPicker')) {
      liff.shareTargetPicker([
        {
          'type': 'text',
          'text': 'Hello, World!'
        }
      ])
  }
  
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ここから、アプリを作っていこう！！
        </p>
         <button className="button" onClick={sendMessage}>send message</button> {/*// 追加 */}
        <button className="button" onClick={openWindow}>Googleを開くよ！！！</button> {/*// 追加 */}
        <button className="button" onClick={shareTargetPicker}>指定した友達にメッセージを送るよ</button> {/*// 追加 */}
        <button className="button" onClick={getUserInfo}>ユーザー情報を表示するよ！！</button> {/*// 追加 */}

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