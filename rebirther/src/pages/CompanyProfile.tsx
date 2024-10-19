import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCard, IonLabel, IonCardContent } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './CompanyProfile.css';

const CompanyProfile: React.FC = () => {
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
        <IonCard className="post">
          <IonCardContent className="make-post">
            <IonLabel>Company Name:</IonLabel>
            <IonInput 
              type="text" 
              value={compName} 
              onIonChange={e => setCompName(e.detail.value!)} 
              placeholder="Enter Company Name" 
            />
          </IonCardContent>
          <IonCardContent className="make-post">
            <IonLabel>Mission Statement:</IonLabel>
            <IonInput 
              type="text" 
              value={missionStmt} 
              onIonChange={e => setmissionStmt(e.detail.value!)} 
              placeholder="Enter Mission Statement" 
            />
          </IonCardContent>
          <IonCardContent className="make-post">
            <IonLabel>Location:</IonLabel>
            <IonInput 
              type="text" 
              value={location} 
              onIonChange={e => setLocation(e.detail.value!)} 
              placeholder="Enter Location" 
            />
          </IonCardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
            <IonButton className="button-color" onClick={saveProfile} expand="block">
              Save Information
            </IonButton>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CompanyProfile;