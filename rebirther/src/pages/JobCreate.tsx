import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCard, IonText, IonCardHeader, IonAvatar,
    IonCardContent
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './JobCreate.css';

const ProfileDisplay: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard className="post">
                    <IonCardContent className="make-post">
                        <IonInput placeholder="Job Title"></IonInput>
                    </IonCardContent>
                    <IonCardContent className="make-post">
                        <IonInput placeholder="Job Description"></IonInput>
                    </IonCardContent>
                    <IonCardContent className="make-post">
                        <IonInput placeholder="Company "></IonInput>
                    </IonCardContent>
                    <IonCardContent className="make-post">
                        <IonInput placeholder="Salary Expectations"></IonInput>
                    </IonCardContent>
                    <IonCardContent className="make-post">
                        <IonInput placeholder="Benefits"></IonInput>
                    </IonCardContent>
                    <IonCardContent className="make-post">
                        <IonInput placeholder="Additional Information"></IonInput>
                    </IonCardContent>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
                        <div className="apply-button-container">
                            <IonButton className="button-color" href="/user-job" expand="block">
                                Create
                            </IonButton>
                        </div>
                        <div className="apply-button-container">
                            <IonButton className="button-color" href="/user-job" expand="block">
                                Cancel
                            </IonButton>
                        </div>
                    </div>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default ProfileDisplay;
