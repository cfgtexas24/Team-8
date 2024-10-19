import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonCard, IonButton, IonCardContent } from '@ionic/react';
import { useParams } from 'react-router-dom'; // Import useParams to get route parameters
import jobsData from '../jobs.json';  // Import your JSON file
import './UserJob.css';

const UserJobDeets: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the job ID from the URL parameters
  const job = jobsData.jobs.find((job) => job.id === parseInt(id)); // Find the job by ID

  console.log('Job ID:', id);
  console.log('Job Data:', job);

  if (!job) {
    return (
      <IonContent>
        <h2>Job not found!</h2>
      </IonContent>
    );
  }

  return (
    <IonPage className="job-details-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="job-details-title">{job.title} at {job.company}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard className="job-details-card">
          <IonCardContent className="job-details-content">
            <h2>About the Job</h2>
            <p>{job.about.jobDescription}</p>
            <h3>Company Overview</h3>
            <p>{job.about.companyOverview}</p>
            <h3>Qualifications</h3>
            <p>Required:</p>
            <ul>
              {job.qualifications.required.map((qual, index) => (
                <li key={index}>{qual}</li>
              ))}
            </ul>
            <p>Preferred:</p>
            <ul>
              {job.qualifications.preferred.map((qual, index) => (
                <li key={index}>{qual}</li>
              ))}
            </ul>
            <h3>Benefits</h3>
            <ul>
              {job.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <div className="apply-button-container">
              <IonButton size="small" className="apply-button">
                Apply Now
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default UserJobDeets;
