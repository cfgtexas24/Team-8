import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCard, IonLabel, IonCardContent, IonIcon } from '@ionic/react';
import { trash } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [newSkill, setNewSkill] = useState<string>('');
  const [skills, setSkills] = useState<string[]>([]);
  const [newExp, setNewExp] = useState<string>('');
  const [exp, setExp] = useState<string[]>([]);
  const [newCert, setNewCert] = useState<string>('');
  const [cert, setCert] = useState<string[]>([]);

  useEffect(() => {
    // Load profile data from local storage when component mounts
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      const profile = JSON.parse(storedProfile);
      setFirstName(profile.firstName || '');
      setLastName(profile.lastName || '');
      setAge(profile.age || '');
      setPhoneNumber(profile.phoneNumber || '');
      setSkills(profile.skills || []);
      setExp(profile.experiences || []);
      setCert(profile.certifications || []);
    }
  }, []);

  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const deleteSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const addExp = () => {
    if (newExp.trim() !== '') {
      setExp([...exp, newExp.trim()]);
      setNewExp('');
    }
  };

  const deleteExp = (index: number) => {
    const updatedExp = exp.filter((_, i) => i !== index);
    setExp(updatedExp);
  };

  const addCert = () => {
    if (newCert.trim() !== '') {
      setCert([...cert, newCert.trim()]);
      setNewCert('');
    }
  };

  const deleteCert = (index: number) => {
    const updatedCert = cert.filter((_, i) => i !== index);
    setCert(updatedCert);
  };

  const saveProfile = () => {
    const profile = {
      firstName,
      lastName,
      age,
      phoneNumber,
      skills,
      experiences: exp,
      certifications: cert,
    };
    localStorage.setItem('userProfile', JSON.stringify(profile));
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
            <IonLabel>First Name:</IonLabel>
            <IonInput 
              type="text" 
              value={firstName} 
              onIonChange={e => setFirstName(e.detail.value!)} 
              placeholder="Enter First Name" 
            />
          </IonCardContent>
          <IonCardContent className="make-post">
            <IonLabel>Last Name:</IonLabel>
            <IonInput 
              type="text" 
              value={lastName} 
              onIonChange={e => setLastName(e.detail.value!)} 
              placeholder="Enter Last Name" 
            />
          </IonCardContent>
          <IonCardContent className="make-post">
            <IonLabel>Age:</IonLabel>
            <IonInput 
              type="number" 
              value={age} 
              onIonChange={e => setAge(e.detail.value!)} 
              placeholder="Enter Age" 
            />
          </IonCardContent>
          <IonCardContent className="make-post">
            <IonLabel>Phone Number:</IonLabel>
            <IonInput 
              type="tel" 
              value={phoneNumber} 
              onIonChange={e => setPhoneNumber(e.detail.value!)} 
              placeholder="Enter Phone Number" 
            />
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
            {skills.map((skill, index) => (
              <IonItem key={index}>
                {skill}
                <IonButton slot="end" fill="clear" onClick={() => deleteSkill(index)}>
                  <IonIcon icon={trash} />
                </IonButton>
              </IonItem>
            ))}
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
            {exp.map((experience, index) => (
              <IonItem key={index}>
                {experience}
                <IonButton slot="end" fill="clear" onClick={() => deleteExp(index)}>
                  <IonIcon icon={trash} />
                </IonButton>
              </IonItem>
            ))}
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
            <IonButton className="button-color" onClick={addCert} disabled={!newCert.trim()}>
              Add New Certifications
            </IonButton>
            {cert.map((certification, index) => (
              <IonItem key={index}>
                {certification}
                <IonButton slot="end" fill="clear" onClick={() => deleteCert(index)}>
                  <IonIcon icon={trash} />
                </IonButton>
              </IonItem>
            ))}
          </IonCardContent>

          <IonCardContent className="make-post">
            <IonLabel>Please Upload Resume:</IonLabel>
            <input type="file" />
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

export default Profile;