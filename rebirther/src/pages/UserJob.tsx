import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCard, IonButton,
  IonCardHeader, IonCardContent, IonAvatar, IonInput } from '@ionic/react';
import { Link } from 'react-router-dom';
import jobsData from '../jobs.json'; // Import your JSON file
import { useHistory } from 'react-router-dom';
import './UserJob.css';

const UserJob: React.FC = () => {
  const history = useHistory(); // useHistory hook for navigation

  // Function to handle card click
  const handleCardClick = (jobId: number) => {
    history.push(`/job/${jobId}`); // Navigate to job details page
  };

  const handleAppliedJobsClick = () => {
    history.push('/AppliedJobs'); // Navigate to applied jobs page (adjust the route as needed)
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Job Listings</IonTitle>
          <IonButton className="button-color" href="/posted-jobs"  slot="end" style={{ marginRight: '16px' }} >Show Posted Jobs</IonButton>
          <IonButton className="button-color" href="/create-job"  slot="end" style={{ marginRight: '16px' }} >Create New Job Posting</IonButton>
          <IonButton className="button-color" slot="end" style={{ marginRight: '16px' }} onClick = {handleAppliedJobsClick}>Applied Jobs </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Mapping over the jobs array to display each job */}
        {jobsData.jobs.map((job) => (
          <div className="jobs">
            <IonCard 
              className="job-card" 
              key={job.id}  // Add onClick handler
            >
              
              <IonCardHeader>
                <IonTitle className="title">{job.title} at {job.company}</IonTitle>
                </IonCardHeader>
                <IonCardContent className="description">
                {job.about.jobDescription}
                </IonCardContent>
                <div className="read-more">
                  <IonButton className="button-color" onClick={() => handleCardClick(job.id)}>Read More</IonButton>
                </div>
            </IonCard>
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default UserJob;