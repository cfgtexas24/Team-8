import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCard, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
import jobsData from '../jobs.json'; // Import your JSON file
import { useHistory } from 'react-router-dom';

const UserJob: React.FC = () => {
  const history = useHistory(); // useHistory hook for navigation

  // Function to handle card click
  const handleCardClick = (jobId: number) => {
    history.push(`/job/${jobId}`); // Navigate to job details page
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Job Listings</IonTitle>
          <IonButton className="button-color" slot="end" style={{ marginRight: '16px' }}>Applied Jobs </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Mapping over the jobs array to display each job */}
        {jobsData.jobs.map((job) => (
          <IonCard 
            className="custom-card" 
            key={job.id}
            onClick={() => handleCardClick(job.id)}  // Add onClick handler
          >
            {job.title} at {job.company}
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default UserJob;