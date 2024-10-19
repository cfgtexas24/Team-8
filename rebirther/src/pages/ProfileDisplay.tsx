import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCard, IonText, IonCardHeader, IonAvatar,
IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './ProfileDisplay.css';

const ProfileDisplay: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='white'>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="edit">
            <IonButton color="white" href="/profile-edit">Edit</IonButton>
        </div>
        <div className="profile-container">
            <div className="photo-container">
                <IonAvatar className="profile-photo">
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
            </div>
            <div className="right-field">
                <IonCard className="field">
                    <IonCardContent className="description">
                    John
                    </IonCardContent>
                </IonCard>
                <IonCard className="field">
                    <IonCardContent className="description">
                    Smith
                    </IonCardContent>
                </IonCard>
                <IonCard className="field">
                    <IonCardContent className="description">
                    626 737 8489
                    </IonCardContent>
                </IonCard>
            </div>
        </div>
        <div className="fields-container">
            <div className="main-field">
                <IonCard className="field">
                    <IonCardContent className="description">
                    Java, CSS, HTML, MySQL, Teamwork, Leadership
                    </IonCardContent>
                </IonCard>
            </div>
            <div className="main-field">
                <IonCard className="field">
                    <IonCardContent className="description">
                    Software Engineer at JPMorganChase
                    </IonCardContent>
                </IonCard>
            </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProfileDisplay;
