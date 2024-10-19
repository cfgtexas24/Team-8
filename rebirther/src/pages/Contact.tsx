import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonFooter,
  IonPage,
  IonCol,
  IonRow,
  IonGrid,
} from '@ionic/react';
import { send } from 'ionicons/icons';
import './Contact.css';

interface Message {
  sender: string;
  text: string;
}

interface Contact {
  id: number;
  name: string;
}

const ChatWithContacts: React.FC = () => {
  const [contacts] = useState<Contact[]>([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Google' },
    { id: 3, name: 'Linkedin' },
  ]);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'User 1', text: 'Hey there!' },
    { sender: 'Me', text: 'Hi! How are you?' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: 'Me', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contacts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="3" className="contact-list">
              <IonList>
                {contacts.map((contact) => (
                  <IonItem key={contact.id} button>
                    <IonLabel>{contact.name}</IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </IonCol>
            <IonCol size="9" className="chat-window">
              <IonList>
                {messages.map((message, index) => (
                  <IonItem key={index} className={message.sender === 'Me' ? 'my-message' : 'their-message'}>
                    <IonLabel className="message-bubble">
                      <h2>{message.sender}</h2>
                      <p>{message.text}</p>
                    </IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonGrid>
            <IonRow class="ion-align-items-center">
              <IonCol size="9">
                <IonInput
                  value={newMessage}
                  placeholder="Message..."
                  onIonChange={(e) => setNewMessage(e.detail.value!)}
                ></IonInput>
              </IonCol>
              <IonCol size="3" class="ion-text-right">
                <IonButton fill="clear" onClick={sendMessage}>
                  <IonIcon icon={send} />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ChatWithContacts;