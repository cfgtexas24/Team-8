import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCard, IonLabel, IonCardContent } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './CompanyProfile.css';

const CompanyJob: React.FC = () => {
  const [compName, setCompName] = useState('');
  const [missionStmt, setmissionStmt] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    // Load profile data from local storage when component mounts
    const storedCompProfile = localStorage.getItem('companyProfile');
    if (storedCompProfile) {
      const compProfile = JSON.parse(storedCompProfile);
      setCompName(compProfile.compName || '');
      setmissionStmt(compProfile.missionStmt || '');
      setLocation(compProfile.location || '');
    }
  }, []);


  const saveProfile = () => {
    const profile = {
      compName,
      missionStmt,
      location,
    };
    localStorage.setItem('companyProfile', JSON.stringify(profile));
    alert('Profile saved successfully!');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title-color">Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default CompanyJob;