import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonCard, IonButton, IonCardContent, IonCardHeader, IonModal } from '@ionic/react';
import { useParams } from 'react-router-dom';
import './PostedJobs.css';

const PostedJobs: React.FC = () => {
  
    return (
      <IonPage className="job-details-page">
        <IonHeader>
        <IonToolbar>
          <IonTitle>Job Listings</IonTitle>
          <IonButton className="button-color" href="/posted-jobs"  slot="end" style={{ marginRight: '16px' }} >Show Posted Jobs</IonButton>
          <IonButton className="button-color" href="/create-job"  slot="end" style={{ marginRight: '16px' }} >Create New Job Posting</IonButton>
          <IonButton className="button-color" slot="end" style={{ marginRight: '16px' }}>Applied Jobs </IonButton>
        </IonToolbar>
      </IonHeader>
        <IonContent fullscreen>
          <div className="jobs">
            <IonCard className="job-info">
              <IonCardContent className="job-details-content">
                <IonTitle className="title">
                  Software Engineer
                </IonTitle>
                <div className="section">
                  <h2 className="section-title">Company Overview</h2>
                  <p>Google is a multinational technology company specializing in Internet-related services and products, including search engines, online advertising technologies, cloud computing, software, and hardware. The company is known for its innovation and commitment to sustainability.</p>
                </div>
  
                <div className="section">
                  <h2 className="section-title">Job Description</h2>
                  <p>As a Software Engineer Intern at Google, you will work on high-impact projects across various teams. You'll be involved in designing, coding, testing, and deploying software solutions that could range from backend services to client-facing applications. You'll collaborate with experienced engineers to help solve complex technical challenges.</p>
                </div>

                <IonCard className="applicant">
                    <IonCardContent className="applicant-details-content">
                        <div className="single-app">
                            <IonTitle className="title">
                                John Smith
                            </IonTitle>
                            <IonButton>
                                View Application
                            </IonButton>
                        </div>
                    </IonCardContent>
                </IonCard>
                <IonCard className="applicant">
                    <IonCardContent className="applicant-details-content">
                        <div className="single-app">
                            <IonTitle className="title">
                                John Smith
                            </IonTitle>
                            <IonButton>
                                View Application
                            </IonButton>
                        </div>
                    </IonCardContent>
                </IonCard>
                <IonCard className="applicant">
                    <IonCardContent className="applicant-details-content">
                        <div className="single-app">
                            <IonTitle className="title">
                                John Smith
                            </IonTitle>
                            <IonButton>
                                View Application
                            </IonButton>
                        </div>
                    </IonCardContent>
                </IonCard>
                <IonCard className="applicant">
                    <IonCardContent className="applicant-details-content">
                        <div className="single-app">
                            <IonTitle className="title">
                                John Smith
                            </IonTitle>
                            <IonButton>
                                View Application
                            </IonButton>
                        </div>
                    </IonCardContent>
                </IonCard>
              </IonCardContent>
            </IonCard>
          </div>
  
        </IonContent>
      </IonPage>
    );
  };
  
  export default PostedJobs;