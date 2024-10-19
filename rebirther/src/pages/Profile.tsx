import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCard, IonLabel, IonCardContent } from '@ionic/react';
import React, { useState } from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  const [newSkill, setNewSkill] = useState<string>('');
  const [skills, setSkills] = useState<string[]>([]);
  const [newExp, setNewExp] = useState<string>('');
  const [exp, setExp] = useState<string[]>([]);
  const [newCert, setNewCert] = useState<string>('');
  const [cert, setCert] = useState<string[]>([]);


  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill]);
      setNewSkill(''); // Clear input field
    }
  };

  const addExp = () => {
    if (newExp.trim() !== '') {
      setExp([...exp, newExp]);
      setNewExp(''); // Clear input field
    }
  };

  const addCert = () => {
    if (newCert.trim() !== '') {
      setCert([...cert, newCert]);
      setNewCert(''); // Clear input field
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title-color">Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard className="post"> {/*using post css*/}
          <IonCardContent className="make-post">
            <IonLabel>First Name:</IonLabel>
            <IonInput type="text" placeholder="Enter First Name" />
          </IonCardContent>
          <IonCardContent className="make-post">
            <IonLabel>Last Name:</IonLabel>
            <IonInput type="text" placeholder="Enter Last Name" />
          </IonCardContent>
          <IonCardContent className="make-post">
            <IonLabel>Age:</IonLabel>
            <IonInput type="number" placeholder="Enter Age" />
          </IonCardContent>
          <IonCardContent className="make-post">
            <IonLabel>Phone Number:</IonLabel>
            <IonInput type="tel" placeholder="Enter Phone Number" />
          </IonCardContent>
          <IonCardContent className="make-post">
            <IonItem>
              <IonLabel position="floating">Enter Skills:</IonLabel>
              <IonInput className="spacing"
                value={newSkill}
                placeholder="Ex: Java"
                onIonChange={e => setNewSkill(e.detail.value!)}
                clearInput
              />
            </IonItem>
            <IonButton className="button-color" onClick={addSkill} disabled={!newSkill.trim()}>
              Add New Skill
            </IonButton>
          </IonCardContent>
          <IonCardContent className="make-post">
            <IonItem>
              <IonLabel position="floating">Enter your past and current experiences:</IonLabel>
              <IonInput className="spacing"
                value={newExp}
                placeholder="Ex: Worked at...."
                onIonChange={e => setNewExp(e.detail.value!)}
                clearInput
              />
            </IonItem>
            <IonButton className="button-color" onClick={addExp} disabled={!newExp.trim()}>
              Add New Experience
            </IonButton>
          </IonCardContent>
          <IonCardContent className="make-post">
            <IonItem>
              <IonLabel position="floating">Enter your certifications/awards:</IonLabel>
              <IonInput className="spacing"
                value={newCert}
                placeholder="Ex: UX Design"
                onIonChange={e => setNewCert(e.detail.value!)}
                clearInput
              />
            </IonItem>
            <IonButton className="button-color" onClick={addCert} disabled={!newExp.trim()}>
              Add New Certifications
            </IonButton>
          </IonCardContent>
          <IonCardContent className="make-post">
            <IonLabel>Please Upload Resume:</IonLabel>
            <input type="file" />
          </IonCardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
            <IonButton className="button-color" href="/profile" expand="block">
              Save Information
            </IonButton>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
