import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCard, IonText, IonLabel, IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';
import React, {useState} from 'react';

const Profile: React.FC = () => {
  //populate the skills user inputted
  const[newSkill, setNewSkill] = useState<string>('');
  const[skills, setSkills] = useState<string[]>([]);

  //populate the experiences user inputted
  const[newExp, setNewExp] = useState<string>('');
  const[exp, setExp] = useState<string[]>([]);

  const addSkill = () =>{
    if (newSkill.trim() !== ''){
      setSkills([...skills, newSkill]); //add new skill to list
      setNewSkill(''); //clear input field
    }
  };

  const addExp = () =>{
    if (newExp.trim() !== ''){
      setExp([...exp, newExp]); //add new skill to list
      setNewExp(''); //clear input field
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title-color">Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="profile">
        <IonCard className="bg-color">
          <IonLabel>First Name:</IonLabel>
          <IonInput className="bg-color" type="text"></IonInput>
        </IonCard>
        <IonCard className="bg-color">
        <IonLabel>Last Name:</IonLabel>
          <IonInput className="bg-color" type="text"></IonInput>
        </IonCard>
        <IonCard className="bg-color">
          <IonLabel>Age:</IonLabel>
          <IonInput className="bg-color" type="number"></IonInput>
        </IonCard>
        <IonCard className="bg-color">
          <IonLabel>Phone Number:</IonLabel>
        <IonInput className="bg-color" type="tel"></IonInput>
          </IonCard>
        <IonCard className="bg-color">
          <IonItem className="bg-color">
            <IonLabel position="floating">Enter Skills:</IonLabel>
            <IonInput className="spacing"
              value={newSkill}
              placeholder="Ex: Java"
              onIonChange={e => setNewSkill(e.detail.value!)} clearInput 
              />
          </IonItem>
          <IonButton className="button-color" onClick={addSkill} disabled={!newSkill.trim()}>Add New Skill</IonButton>
        </IonCard>
        <IonCard className="bg-color">
          <IonItem className="bg-color">
            <IonLabel position="floating">Enter your past and current experiences</IonLabel>
            <IonInput className="spacing" value={newExp}
            placeholder="Ex..."
            onIonChange={(e) => setNewExp(e.detail.value!)} clearInput/>
          </IonItem>
          <IonButton className="button-color" onClick={addExp} disabled={!newExp.trim()}>Add New Experience</IonButton>
        </IonCard>
        <IonCard>
          <IonItem className="bg-color">
          <IonCardContent>Please Upload Resume:</IonCardContent>
            <input type="file"></input>
          </IonItem>
        </IonCard>
        <IonButton className="button-color" href="/profile">Save Information</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
