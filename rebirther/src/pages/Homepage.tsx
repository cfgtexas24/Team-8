import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonAvatar,
  IonButton,
  IonInput
} from '@ionic/react';
import './Homepage.css';

// Define the props interface for Homepage
interface HomepageProps {
  switchToCompany: () => void;
  switchToUser: () => void;
}

const Homepage: React.FC<HomepageProps> = ({ switchToCompany }) => {
  const repeat = 10;

  return (
    <IonPage className="page">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="header">Home</IonTitle>
          <IonButton className="button-color" href="/admin-panel"  slot="end" style={{ marginRight: '16px' }} >Show Admin Panel</IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard className="post">
          <IonCardContent className="make-post">
            <IonInput placeholder="Share something with the ReBirth Community!" />
          </IonCardContent>
        </IonCard>

        {/* Render multiple post cards */}
        {Array.from({ length: repeat }).map((_, index) => (
          <IonCard className="post" key={index}>
            <IonCardHeader className="post-header">
              <div className="header-container">
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  />
                </IonAvatar>
                <IonTitle className="title">JPMorganChase</IonTitle>
              </div>
            </IonCardHeader>
            <IonCardContent className="description">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan sodales hendrerit
              vestibulum ridiculus integer aliquet. Eros sagittis sem velit mauris commodo duis
              fusce. Eros commodo maecenas conubia integer tellus mattis cursus convallis. Eros
              montes mollis cras mollis praesent taciti. Quam donec varius nullam suscipit tempor
              vivamus ornare etiam. Ut cras magna at lobortis imperdiet primis cursus.
            </IonCardContent>
            <IonCardContent className="comment">
              <IonInput placeholder="Leave a comment" />
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Homepage;
