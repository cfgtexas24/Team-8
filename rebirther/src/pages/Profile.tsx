import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCard, IonText, IonLabel } from '@ionic/react';
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
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="profile">
        <IonCard className="first">
          <IonLabel className="custom-font">First Name:</IonLabel>
          <IonInput type="text"></IonInput>
        </IonCard>
        <IonCard className="last">
        <IonLabel className="custom-font">Last Name:</IonLabel>
          <IonInput type="text"></IonInput>
        </IonCard>
        <IonCard className="age">
          <IonLabel className="custom-font">Age:</IonLabel>
          <IonInput type="number"></IonInput>
        </IonCard>
        <IonCard className="phone-number">
          <IonLabel className="custom-font">Phone Number:</IonLabel>
        <IonInput type="tel"></IonInput>
          </IonCard>
        <IonCard className="skills">
          <IonItem>
            <IonLabel className="custom-font" position="floating">Enter Skills:</IonLabel>
            <IonInput className="spacing"
              value={newSkill}
              placeholder="Ex: Java"
              onIonChange={e => setNewSkill(e.detail.value!)} clearInput 
              />
          </IonItem>
          <IonButton onClick={addSkill} disabled={!newSkill.trim()}>Add New Skill</IonButton>
        </IonCard>
        <IonCard className="Experience">
          <IonItem>
            <IonLabel position="floating">Enter your past and current experiences</IonLabel>
            <IonInput className="spacing" value={newExp}
            placeholder="Ex..."
            onIonChange={(e) => setNewExp(e.detail.value!)} clearInput/>
          </IonItem>
          <IonButton onClick={addExp} disabled={!newExp.trim()}>Add New Experience</IonButton>
        </IonCard>
        <IonCard>
          <IonItem>
          <IonLabel className="custom-font">Please Upload Resume:</IonLabel>
            <IonText></IonText>
            <input className="custom-font" type="file"></input>
          </IonItem>
        </IonCard>
        <IonButton className="button">Save Information</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
