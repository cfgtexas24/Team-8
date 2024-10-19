import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonText, IonInput, IonCardHeader, IonCardContent, IonAvatar,
IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Homepage.css';

const Homepage: React.FC = () => {
  const repeat = 10;
  return (
    <IonPage className="page">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="header">Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard className="post">
          <IonCardContent className="make-post">
            <IonInput placeholder="Share something with the ReBirth Community!"></IonInput>
          </IonCardContent>
        </IonCard>
        {Array.from({ length: repeat }).map((_, index) => (
              <IonCard className="post">
                <IonCardHeader className="post-header">
                  <div className="header-container">
                    <IonAvatar>
                      <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </IonAvatar>
                    <IonTitle className="title">JPMorganChase</IonTitle>
                  </div>
                </IonCardHeader>
                <IonCardContent className="description">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan sodales hendrerit vestibulum ridiculus integer aliquet. Eros sagittis sem velit mauris commodo duis fusce. Eros commodo maecenas conubia integer tellus mattis cursus convallis. Eros montes mollis cras mollis praesent taciti. Quam donec varius nullam suscipit tempor vivamus ornare etiam. Ut cras magna at lobortis imperdiet primis cursus. Suspendisse libero lobortis montes hac, a dapibus vel ornare? Molestie et sagittis tellus penatibus lorem.
                Laoreet sed at aliquet commodo commodo netus. Sem orci finibus penatibus molestie metus tortor molestie pellentesque. Risus lacus neque interdum arcu dapibus mus sollicitudin quisque. Cras proin etiam viverra taciti nulla amet libero vulputate. Sollicitudin vel adipiscing nibh nullam nisl. Penatibus ac duis volutpat molestie egestas. Congue facilisis rutrum netus ridiculus eleifend nec semper. Vel quam volutpat efficitur lobortis nec euismod potenti.
                </IonCardContent>
                <IonCardContent className="comment">
                  <IonInput placeholder="Leave a comment"></IonInput>
                </IonCardContent>
              </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Homepage;
