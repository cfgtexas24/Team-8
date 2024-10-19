import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';

const Profile: React.FC = () => {
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCard, IonText, IonLabel, IonList } from '@ionic/react';
import './Profile.css';
import React, { useState, useEffect } from 'react';

const Profile: React.FC = () => {
  const [newSkill, setNewSkill] = useState<string>('');
  const [skills, setSkills] = useState<string[]>([]);
  const [newExp, setNewExp] = useState<string>('');
  const [exp, setExp] = useState<string[]>([]);
  const [resume, setResume] = useState<string | null>(null);

  useEffect(() => {
    const storedResume = localStorage.getItem('userResume');
    if (storedResume) {
      setResume(storedResume);
    }
  }, []);

  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const addExp = () => {
    if (newExp.trim() !== '') {
      setExp([...exp, newExp]);
      setNewExp('');
    }
  };

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        setResume(text);
        localStorage.setItem('userResume', text);
      };
      reader.readAsText(file);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Profile page" />
      </IonContent>
    </IonPage>
  );
};

export default Profile;