import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCard, IonButton, IonCardHeader, IonCardContent } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import jobsData from '../jobs.json'; // Import your JSON file
import './AppliedJobs.css';

const AppliedJobs: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Job Listings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Mapping over the jobs array to display each job */}
        {jobsData.jobs.map((job) => (
          <div className="jobs">
          <IonCard 
            className="job-card" 
            key={job.id}
          >
            <IonCardHeader>
                <IonTitle className="title">{job.title} at {job.company}</IonTitle>
                </IonCardHeader>
                <IonCardContent className="description">
                {job.about.jobDescription}
                </IonCardContent>
                <div className="read-more">
                  Status: Under Review
                </div>
          </IonCard>
          </div>
        ))}
        <div className="create-job">
          <div>
            <IonButton color='white' slot="end" style={{ marginRight: '16px' }} href="/user-job">All Jobs</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AppliedJobs;
