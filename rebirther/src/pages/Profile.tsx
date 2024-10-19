import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCard, IonText } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard className="First">
        <IonInput>First Name:</IonInput>
        </IonCard>
        <IonCard className="Last">
        <IonInput>Last Name:</IonInput>
        </IonCard>
        <IonCard className="Skills">
        <IonInput>Add Your Skills:</IonInput>
        </IonCard>
        <IonCard className="Age">
        <IonInput>Age:</IonInput>
        </IonCard>
        <IonCard className="Experience">
        <IonInput>Add your Current Experiences:</IonInput>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonText>Please Upload Resume</IonText>
            <input type="file"></input>
          </IonItem>
        </IonCard>
        <IonButton href="/profile">Save Information</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
