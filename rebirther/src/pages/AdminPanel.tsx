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
          <IonButton className="button-color" href="/home"  slot="end" style={{ marginRight: '16px' }} >Exit</IonButton>
        </IonToolbar>
      </IonHeader>
        <IonContent fullscreen>
          <div className="jobs">
            <IonCard className="job-info">
              <IonCardContent className="job-details-content">
                <IonTitle className="title">
                  Users
                </IonTitle>
                <IonCard className="applicant">
                    <IonCardContent className="applicant-details-content">
                        <div className="single-app">
                            <IonTitle className="title">
                                John Smith
                            </IonTitle>
                            <IonButton>
                                Edit
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
                                Edit
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
                                Edit
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
                                Edit
                            </IonButton>
                        </div>
                    </IonCardContent>
                </IonCard>
                <IonTitle className="title">
                  Companies
                </IonTitle>
                <IonCard className="applicant">
                    <IonCardContent className="applicant-details-content">
                        <div className="single-app">
                            <IonTitle className="title">
                                JPMorganChase
                            </IonTitle>
                            <IonButton>
                                Edit
                            </IonButton>
                        </div>
                    </IonCardContent>
                </IonCard>
                <IonCard className="applicant">
                    <IonCardContent className="applicant-details-content">
                        <div className="single-app">
                            <IonTitle className="title">
                                Code For Good
                            </IonTitle>
                            <IonButton>
                                Edit
                            </IonButton>
                        </div>
                    </IonCardContent>
                </IonCard>
                <IonCard className="applicant">
                    <IonCardContent className="applicant-details-content">
                        <div className="single-app">
                            <IonTitle className="title">
                                Data For Good
                            </IonTitle>
                            <IonButton>
                                Edit
                            </IonButton>
                        </div>
                    </IonCardContent>
                </IonCard>
                <IonCard className="applicant">
                    <IonCardContent className="applicant-details-content">
                        <div className="single-app">
                            <IonTitle className="title">
                                Tech For Social Good
                            </IonTitle>
                            <IonButton>
                                Edit
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