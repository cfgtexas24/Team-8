import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonAvatar, IonCard, IonCardContent } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './ProfileDisplay.css';

const CompanyProfileDisplay: React.FC = () => {
  const [compProfile, setCompProfile] = useState({ compName: '', missionStmt: '', location: '' });

  useEffect(() => {
    // Load profile data from local storage when component mounts
    const storedCompProfile = localStorage.getItem('companyProfile');
    if (storedCompProfile) {
      setCompProfile(JSON.parse(storedCompProfile));
    }
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
          <IonButton className="button-color" href="/company-profile-edit" slot="end" style={{ marginRight: '16px' }}>EDIT</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="profile-container">
          <div className="photo-container">
            <IonAvatar className="profile-photo">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </IonAvatar>
          </div>
          <div className="right-field">
            <IonCard className="field">
              <IonCardContent className="description">
                Company: {compProfile.compName}
              </IonCardContent>
            </IonCard>
            <IonCard className="field">
              <IonCardContent className="description">
                Location: {compProfile.location}
              </IonCardContent>
            </IonCard>
          </div>
        </div>
        <div className="fields-container">
          <div className="main-field">
            <IonCard className="field">
              <IonCardContent className="description">
                Mission Statement: {compProfile.missionStmt}
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CompanyProfileDisplay;
