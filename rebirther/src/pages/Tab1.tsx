import './UserJob.css';
import jobsData from '../jobs.json'
import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React from 'react';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

          <IonTitle>Tab 1</IonTitle>

          <IonTitle>User Job</IonTitle>

          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name="Tab 1 page" />
        
        {/* Mapping over the jobs array to display buttons for each job */}
        {jobsData.jobs.map((job: { title: any; company: any; }, index: any) => (
          <IonCard className="custom-card" key={index}>
            {job.title} at {job.company}
          </IonCard>
        ))}

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
