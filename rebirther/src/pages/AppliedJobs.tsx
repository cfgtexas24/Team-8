import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCard, IonButton } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import jobsData from '../jobs.json'; // Import your JSON file

const AppliedJobs: React.FC = () => {
  const history = useHistory(); // useHistory hook for navigation

  // Function to handle card click
  const handleCardClick = (jobId: number) => {
    history.push(`/job/${jobId}`); // Navigate to job details page
  };

  // Function to handle applied jobs button click
  const handleAppliedJobsClick = () => {
    history.push('/applied-jobs'); // Navigate to applied jobs page (adjust the route as needed)
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Applied Jobs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Mapping over the jobs array to display each job */}
        {jobsData.jobs.map((job) => (
          <IonCard 
            className="custom-card" 
            key={job.id}
            onClick={() => handleCardClick(job.id)}  // Add onClick handler for job cards
          >
            {job.title} at {job.company}
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default AppliedJobs;
