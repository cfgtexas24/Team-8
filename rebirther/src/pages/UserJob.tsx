import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './UserJob.css';

const UserJob: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>UserJob</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">UserJob</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="UserJob page" />
      </IonContent>
    </IonPage>
  );
};

export default UserJob;
