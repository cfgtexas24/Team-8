import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCard, IonLabel, IonList } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [newExp, setNewExp] = useState('');
  const [experiences, setExperiences] = useState<string[]>([]);
  const [newCert, setNewCert] = useState('');
  const [certifications, setCertifications] = useState<string[]>([]);

  useEffect(() => {
    // Load data from local storage when component mounts
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      const profile = JSON.parse(storedProfile);
      setFirstName(profile.firstName || '');
      setLastName(profile.lastName || '');
      setAge(profile.age || '');
      setPhoneNumber(profile.phoneNumber || '');
      setSkills(profile.skills || []);
      setExperiences(profile.experiences || []);
      setCertifications(profile.certifications || []);
    }
  }, []);

  const saveProfile = () => {
    const profile = {
      firstName,
      lastName,
      age,
      phoneNumber,
      skills,
      experiences,
      certifications,
    };
    localStorage.setItem('userProfile', JSON.stringify(profile));
    alert('Profile saved successfully!');
  };

  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const addExperience = () => {
    if (newExp.trim() !== '') {
      setExperiences([...experiences, newExp.trim()]);
      setNewExp('');
    }
  };

  const addCertification = () => {
    if (newCert.trim() !== '') {
      setCertifications([...certifications, newCert.trim()]);
      setNewCert('');
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
        <IonCard>
          <IonItem>
            <IonLabel position="floating">First Name</IonLabel>
            <IonInput value={firstName} onIonChange={e => setFirstName(e.detail.value!)} />
          </IonItem>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonLabel position="floating">Last Name</IonLabel>
            <IonInput value={lastName} onIonChange={e => setLastName(e.detail.value!)} />
          </IonItem>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonLabel position="floating">Age</IonLabel>
            <IonInput type="number" value={age} onIonChange={e => setAge(e.detail.value!)} />
          </IonItem>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonLabel position="floating">Phone Number</IonLabel>
            <IonInput type="tel" value={phoneNumber} onIonChange={e => setPhoneNumber(e.detail.value!)} />
          </IonItem>
        </IonCard>
        
        <IonCard>
          <IonItem>
            <IonLabel position="floating">Add Skill</IonLabel>
            <IonInput value={newSkill} onIonChange={e => setNewSkill(e.detail.value!)} />
          </IonItem>
          <IonButton expand="block" onClick={addSkill}>Add Skill</IonButton>
          <IonList>
            {skills.map((skill, index) => (
              <IonItem key={index}>{skill}</IonItem>
            ))}
          </IonList>
        </IonCard>
        
        <IonCard>
          <IonItem>
            <IonLabel position="floating">Add Experience</IonLabel>
            <IonInput value={newExp} onIonChange={e => setNewExp(e.detail.value!)} />
          </IonItem>
          <IonButton expand="block" onClick={addExperience}>Add Experience</IonButton>
          <IonList>
            {experiences.map((exp, index) => (
              <IonItem key={index}>{exp}</IonItem>
            ))}
          </IonList>
        </IonCard>

          <IonItem>
            <IonLabel position="floating">Add Certification</IonLabel>
            <IonInput value={newCert} onIonChange={e => setNewCert(e.detail.value!)} />
          </IonItem>
          <IonButton expand="block" onClick={saveProfile}>Save Profile</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;