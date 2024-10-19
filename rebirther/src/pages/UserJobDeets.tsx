import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonCard, IonButton, IonCardContent, IonCardHeader } from '@ionic/react';
import { useParams } from 'react-router-dom'; // Import useParams to get route parameters
import jobsData from '../jobs.json';  // Import your JSON file
import './UserJob.css';

const UserJobDeets: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const job = jobsData.jobs.find((job) => job.id === parseInt(id));
  const [showModal, setShowModal] = useState(false);
  const [tailoredResume, setTailoredResume] = useState('');

  if (!job) {
    return (
      <IonContent>
        <h2>Job not found!</h2>
      </IonContent>
    );
  }

  const handleApply = async () => {
    const storedResume = localStorage.getItem('userResume');
    if (!storedResume) {
      alert('Please upload your resume in the Profile page first.');
      return;
    }

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resume: storedResume,
          jobDescription: job.about.jobDescription,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to tailor resume');
      }

      const data = await response.json();
      setTailoredResume(data.tailoredResume);
      setShowModal(true);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to tailor resume. Please try again.');
    }
  };

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
        <div className="jobs">
        <IonCard className="job-info" key={job.id}>
          <IonCardHeader className="post-header">
            <IonTitle className="title">
              {job.title} at {job.company}
            </IonTitle>
          </IonCardHeader>

          <IonCardContent className="job-details-content">
            <div className="section">
              <h2 className="section-title">Company Overview</h2>
              <p>{job.about.companyOverview}</p>
            </div>

            <div className="section">
              <h2 className="section-title">Job Description</h2>
              <p>{job.about.jobDescription}</p>
            </div>

            <div className="section">
              <h2 className="section-title">Benefits</h2>
              <p>{job.benefits}</p>
            </div>

            <div className="section">
              <h2 className="section-title">Required Qualifications</h2>
              <p>{job.qualifications.required}</p>
            </div>

            <div className="section">
              <h2 className="section-title">Preferred Qualifications</h2>
              <p>{job.qualifications.preferred}</p>
            </div>

            <div className="section">
              <h2 className="section-title">Education</h2>
              <p>{job.education}</p>
            </div>
          </IonCardContent>

          <div className="apply-button-container">
            <IonButton color='white' className="apply-button" expand="block">Apply Now</IonButton>
          </div>
        </IonCard>


        </div>
      </IonContent>
    </IonPage>
  );
};
export default UserJobDeets;
