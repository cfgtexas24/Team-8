import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonText
} from '@ionic/react';
import './ProfileDisplay.css';

interface UserProfile {
  firstName: string;
  lastName: string;
  age: string;
  phoneNumber: string;
  skills: string[];
  experiences: string[];
  certifications: string[];
}

const ProfileDisplay: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [headshot, setHeadshot] = useState<string | null>(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem('userProfile');
    const storedHeadshot = localStorage.getItem('headshot');
    
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
    
    if (storedHeadshot) {
      setHeadshot(storedHeadshot);
    }
  }, []);

  if (!profile) {
    return <IonPage><IonContent>Loading profile...</IonContent></IonPage>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
          <IonButton className="button-color" href="/profile-edit" slot="end" style={{ marginRight: '16px' }}>EDIT</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="profile-container">
          <div className="photo-container">
            <IonAvatar className="profile-photo">
              {headshot ? (
                <img alt="User's headshot" src={headshot} />
              ) : (
                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
              )}
            </IonAvatar>
          </div>
          <div className="right-field">
            <IonCard className="field">
              <IonCardContent className="description">{profile.firstName}</IonCardContent>
            </IonCard>
            <IonCard className="field">
              <IonCardContent className="description">{profile.lastName}</IonCardContent>
            </IonCard>
            <IonCard className="field">
              <IonCardContent className="description">{profile.phoneNumber}</IonCardContent>
            </IonCard>
            <IonCard className="field">
              <IonCardContent className="description">Age: {profile.age}</IonCardContent>
            </IonCard>
          </div>
        </div>
        <div className="fields-container">
          <div className="main-field">
            <IonCard className="field">
              <IonCardContent className="description">
                <h2>Skills: </h2>
                <IonText>{profile.skills.join(', ')}</IonText>
              </IonCardContent>
            </IonCard>
          </div>
          <div className="main-field">
            <IonCard className="field">
              <IonCardContent className="description">
                <h2>Experiences: </h2>
                <ul className="vertical-list">
                  {profile.experiences.map((exp, index) => (
                    <li key={index}>{exp}</li>
                  ))}
                </ul>
              </IonCardContent>
            </IonCard>
          </div>
          <div className="main-field">
            <IonCard className="field">
              <IonCardContent className="description">
                <h2>Certifications: </h2>
                <IonText>{profile.certifications.join(', ')}</IonText>
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProfileDisplay;