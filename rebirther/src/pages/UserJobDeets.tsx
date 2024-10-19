import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonCard, IonButton, IonCardContent, IonCardHeader, IonModal } from '@ionic/react';
import { useParams } from 'react-router-dom';
import jobsData from '../jobs.json';
import './UserJobDeets.css';

const UserJobDeets: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const job = jobsData.jobs.find((job) => job.id === parseInt(id));
  const [showModal, setShowModal] = useState(false);
  const [tailoredResume, setTailoredResume] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const formatResume = (resumeText: string): string => {
    // Example: Replace line breaks with <br> and add section titles or bullet points
    return resumeText
      .split('\n\n') // Split by double newlines into sections
      .map((section) => `<p>${section.replace(/\n/g, '<br />')}</p>`) // Wrap each section in <p>
      .join(''); // Combine into a single string
  };

  console.log('Job ID:', id);
  console.log('Job Data:', job);

  if (!job) {
    return (
      <IonContent>
        <h2>Job not found!</h2>
      </IonContent>
    );
  }

  const handleApply = async () => {
    setErrorMessage('');
    const storedProfile = localStorage.getItem('userProfile');
    if (!storedProfile) {
      setErrorMessage('Please complete your profile on the Profile page first.');
      return;
    }

    const profile = JSON.parse(storedProfile);
    console.log('Profile data:', profile);
    console.log('Job description:', job.about.jobDescription);

    try {
      console.log('Sending request to server...');
      const response = await fetch('http://localhost:3001/api/tailor-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          profile: profile,
          jobDescription: job.about.jobDescription,
          customMessage: 'Please create a full resume that takes the info I provided about the candidate and the job description, taking extra care to make the resume tailored to the job description when deciding wording and what info to put.',
        }),
      });

      console.log('Received response from server. Status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Received data:', data);
      setTailoredResume(data.tailoredResume);
      setShowModal(true);
    } catch (error: any) {
      console.error('Caught error:', error);
      setErrorMessage(`Failed to tailor resume: ${error.message}`);
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

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
              <div className="apply-button-container">
                <IonButton color="white" onClick={handleApply} className="apply-button" expand="block">
                  Apply Now
                </IonButton>
              </div>
              <div className="apply-button-container">
                <IonButton color="white" href="/user-job" className="apply-button" expand="block">
                  Cancel
                </IonButton>
              </div>
            </div>
          </IonCard>
        </div>

        {errorMessage && (
          <div className="error-message">
            <p>{errorMessage}</p>
          </div>
        )}

      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonContent>
          <div style={{ padding: '16px' }}>
            <h2 className="text">Choose which resumé to submit</h2>
            <div className="submit-button">
              <IonButton onClick={() => setShowModal(false)} style={{ marginTop: '16px' }}>
                Submit Uploaded Resumé
              </IonButton>
            </div>
            <div 
              className="tailored-resume" 
              dangerouslySetInnerHTML={{ __html: formatResume(tailoredResume) }}
            />
            <div className="submit-button">
              <IonButton onClick={() => setShowModal(false)} style={{ marginTop: '16px' }}>
                Submit Custom Resumé
              </IonButton>
            </div>
          </div>
        </IonContent>
      </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default UserJobDeets;