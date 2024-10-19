import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCard, IonText, IonCardHeader, IonAvatar,
    IonCardContent } from '@ionic/react';
    import ExploreContainer from '../components/ExploreContainer';
    import './ProfileDisplay.css';
    
    const CompanyProfileDisplay: React.FC = () => {
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
                        Company
                        </IonCardContent>
                    </IonCard>
                    <IonCard className="field">
                        <IonCardContent className="description">
                        Location
                        </IonCardContent>
                    </IonCard>
                </div>
            </div>
            <div className="fields-container">
                <div className="main-field">
                    <IonCard className="field">
                        <IonCardContent className="description">
                        Mission Statement: 
                        </IonCardContent>
                    </IonCard>
                </div>
            </div>
          </IonContent>
        </IonPage>
      );
    };
    
    export default CompanyProfileDisplay;
    