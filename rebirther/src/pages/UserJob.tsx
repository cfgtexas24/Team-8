import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard } from '@ionic/react';
import jobsData from '../jobs.json';  // Import your JSON file
import './UserJob.css';

const UserJob: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>User Job</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">UserJob</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {/* Mapping over the jobs array to display buttons for each job */}
        {jobsData.jobs.map((job, index) => (
          <IonCard className = "custom-card" key={index}>
            {job.title} at {job.company}
          </IonCard>
        ))}

      </IonContent>
    </IonPage>
  );
};

export default UserJob;
