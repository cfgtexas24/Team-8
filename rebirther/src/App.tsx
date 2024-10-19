import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Homepage from './pages/Homepage';
import UserJob from './pages/UserJob';
import Profile from './pages/Profile';
import ProfileDisplay from './pages/ProfileDisplay';
import JobCreate from './pages/JobCreate';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import UserJobDeets from './pages/UserJobDeets';
import ChatComponent from './pages/Contact';
import AppliedJobs from './pages/AppliedJobs';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Homepage />
          </Route>
          <Route exact path="/user-job">
            <UserJob />
          </Route>
          <Route path="/profile">
            <ProfileDisplay />
          </Route>
          <Route path="/profile-edit">
            <Profile />
          </Route>
          <Route path="/create-job">
            <JobCreate />
          </Route>
          <Route path="/Contact" component={ChatComponent}>
          </Route>
          <Route exact path="/">
            <Redirect to="/Homepage" />
          </Route>
          <Route exact path="/AppliedJobs">
          <AppliedJobs />
          </Route>
          <Route path="/job/:id" component={UserJobDeets} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="user-job" href="/user-job">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Jobs</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
