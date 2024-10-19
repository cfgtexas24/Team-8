<<<<<<< Updated upstream
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
<<<<<<<< Updated upstream:rebirther/src/pages/Tab1.tsx
import './Tab1.css';
========
import './UserJob.css';
import jobsData from '../jobs.json'

>>>>>>>> Stashed changes:rebirther/src/pages/UserJob.tsx
=======
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React from 'react';
>>>>>>> Stashed changes

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
<<<<<<< Updated upstream
<<<<<<<< Updated upstream:rebirther/src/pages/Tab1.tsx
          <IonTitle>Tab 1</IonTitle>
========
          <IonTitle>User Job</IonTitle>
>>>>>>>> Stashed changes:rebirther/src/pages/UserJob.tsx
=======
          <IonTitle>Tab 1</IonTitle>
>>>>>>> Stashed changes
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
<<<<<<< Updated upstream
<<<<<<<< Updated upstream:rebirther/src/pages/Tab1.tsx
        <ExploreContainer name="Tab 1 page" />
========
        
        {/* Mapping over the jobs array to display buttons for each job */}
        {jobsData.jobs.map((job, index) => (
          <IonCard className="custom-card" key={index}>
            {job.title} at {job.company}
          </IonCard>
        ))}

>>>>>>>> Stashed changes:rebirther/src/pages/UserJob.tsx
=======
>>>>>>> Stashed changes
      </IonContent>
    </IonPage>
  );
};
<<<<<<< Updated upstream
<<<<<<<< Updated upstream:rebirther/src/pages/Tab1.tsx

export default Tab1;
========
export default UserJob;
>>>>>>>> Stashed changes:rebirther/src/pages/UserJob.tsx
=======

export default Tab1;
>>>>>>> Stashed changes
