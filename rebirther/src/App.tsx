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
import CompanyProfile from './pages/CompanyProfile';
import CompanyJob from './pages/CompanyJob';
import UserJobDeets from './pages/UserJobDeets';
import ChatComponent from './pages/Contact';
import AppliedJobs from './pages/AppliedJobs';
import { useState } from 'react';
import PostedJobs from './pages/PostedJobs';
import AdminPanel from './pages/AdminPanel';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Dark mode */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import CompanyProfileDisplay from './pages/CompanyProfileDisplay';

setupIonicReact();

const App: React.FC = () => {
  const [isCompanyView, setIsCompanyView] = useState(false);

  const switchToCompany = () => {
    setIsCompanyView(true);
  };

  const switchToUser = () => {
    setIsCompanyView(false);
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {/* Conditionally Render User or Company Interface */}
            {isCompanyView ? (
              <>
                {/* Company-Specific Routes */}
                
                <Route exact path="/company-profile" component={CompanyProfileDisplay} />
                <Route exact path="/home" component={Homepage} />
                <Route exact path="/company-job" component={PostedJobs} />
                <Route exact path="/contacts" component={ChatComponent}/>
                
              </>
            ) : (
              <>
                {/* User-Specific Routes */}
                <Route exact path="/home">
                  <Homepage switchToCompany={switchToCompany} switchToUser={switchToUser} />
                </Route>
                <Route exact path="/profile" component={ProfileDisplay} />
                <Route exact path="/profile-edit" component={Profile} />
                <Route exact path="/user-job" component={UserJob} />
                <Route exact path="/job/:id" component={UserJobDeets} />
                <Route exact path="/AppliedJobs" component={AppliedJobs}/>
                <Route exact path="/contacts" component={ChatComponent}/>
              </>
            )}
            <Route exact path="/company-profile-edit" component={CompanyProfile} />
            <Route exact path="/create-job" component={JobCreate} />
            <Route exact path="/admin-panel" component={AdminPanel} />
          </IonRouterOutlet>
{/*company view*/}
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href={isCompanyView ? "/home" : "/home"}>
              <IonIcon aria-hidden="true" icon={triangle} />
              <IonLabel>{isCompanyView ? "Company Home" : "User Home"}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="user-job" href={isCompanyView ? "/company-job" : "/user-job"}>
              <IonIcon aria-hidden="true" icon={ellipse} />
              <IonLabel>{isCompanyView ? "Manage Jobs" : "Jobs"}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href={isCompanyView ? "/company-profile" : "/profile"}>
              <IonIcon aria-hidden="true" icon={square} />
              <IonLabel>{isCompanyView ? "Company Profile" : "Profile"}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="contacts" href={isCompanyView ? "/contacts" : "/contacts"}>
              <IonIcon aria-hidden="true" icon={square} />
              <IonLabel>{isCompanyView ? "Contacts" : "Contacts"}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="switch" onClick={isCompanyView ? switchToUser : switchToCompany}>
              <IonIcon aria-hidden="true" icon={square} />
              <IonLabel>Switch to {isCompanyView ? "User" : "Company"}</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
