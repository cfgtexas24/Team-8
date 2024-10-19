import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonAvatar,
  IonButton,
  IonInput,
  IonImg,
} from '@ionic/react';
import './Homepage.css';

// Define the props interface for Homepage
interface HomepageProps {
  switchToCompany: () => void;
  switchToUser: () => void;
}

// Sample data for posts from different companies, with large images added to selected posts
const postsData = [
  {
    company: 'JPMorgan Chase',
    content: 'We are excited to announce new internship opportunities for Summer 2025. As one of the leading financial institutions, we offer unparalleled experiences in banking, finance, and technology. Students will have the opportunity to work with top industry professionals and gain hands-on experience. Apply now to start your journey with JPMorgan Chase!',
    imageUrl: 'https://e7.pngegg.com/pngimages/992/1023/png-clipart-chase-bank-logo-jpmorgan-chase-chermayeff-geismar-haviv-chese-blue-angle.png',
  },
  {
    company: 'Google',
    content: 'Google is launching new AI-powered features across all of our products. From Gmail to Google Docs, our AI technology is transforming the way people interact with technology. We’re also expanding our efforts in AI ethics and ensuring these features work for everyone. Interested in helping shape the future? Check out our careers page for opportunities to join the team!',
    imageUrl: 'https://cdn2.hubspot.net/hubfs/53/image8-2.jpg',
  },
  {
    company: 'Meta',
    content: 'Meta is pushing the boundaries of virtual and augmented reality with projects like the Oculus and Horizon Worlds. We’re working on creating the next generation of social connections through immersive experiences. Want to work on cutting-edge technologies and help define the future of the Metaverse? Apply now to be part of the Meta team!',
    imageUrl: 'https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png',
  },
  {
    company: 'Amazon',
    content: 'Amazon is expanding its cloud services with new features for developers. With AWS, we’re providing even more powerful tools for businesses and developers to build, scale, and innovate. Join Amazon today and work on services that power companies around the globe, from startups to Fortune 500 companies. Check out the latest openings on our careers page!',
    imageUrl: 'https://banner2.cleanpng.com/20180501/abw/avdegic5l.webp',
    attachmentImageUrl: 'https://media.licdn.com/dms/image/D4D12AQEmC2CSTK0unw/article-cover_image-shrink_600_2000/0/1691964348159?e=2147483647&v=beta&t=UA2DD5lAEDP28NHD9BRZIoriUAdwNxY8P465qku8lNY', // Large image for attachment
  },
  {
    company: 'Microsoft',
    content: 'Microsoft is hiring engineers for our Azure and cloud services teams. As one of the most prominent cloud platforms, we offer services ranging from AI to data storage. Our engineers are constantly pushing the envelope, driving innovation, and improving the lives of developers and users. If you’re passionate about technology and want to make an impact, we’d love for you to join us!',
    imageUrl: 'https://qph.cf2.quoracdn.net/main-qimg-f5237dce77697b320cb4937489aa5550.webp',
  },
  {
    company: 'Zocdoc',
    content: 'Zocdoc is transforming healthcare with our new platform updates. We’re focused on making healthcare more accessible and transparent for everyone. Our latest updates offer patients a seamless experience, from booking appointments to virtual consultations. Interested in healthcare and technology? Join our mission to make healthcare easier for everyone, everywhere.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kMJr9JRsEye8lMzklUkGiv80YNvnLoPF2w&s',
  },
  {
    company: 'Lennox',
    content: 'Lennox is committed to sustainability with our energy-efficient HVAC systems. Our latest innovations are designed to reduce energy consumption and improve air quality. As part of our team, you’ll work on cutting-edge solutions that not only save energy but also provide comfort in homes and businesses across the world. Explore our opportunities and join us in making a difference!',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpJB6nCJioW5RxQeGuNpuNs1GBiwmOOvh3g&s',
  },
];

const Homepage: React.FC<HomepageProps> = ({ switchToCompany }) => {
  return (
    <IonPage className="page">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="header">Home</IonTitle>
          <IonButton
            className="button-color"
            href="/admin-panel"
            slot="end"
            style={{ marginRight: '16px' }}
          >
            Show Admin Panel
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard className="post">
          <IonCardContent className="make-post">
            <IonInput placeholder="Share something with the ReBirth Community!" />
          </IonCardContent>
        </IonCard>

        {/* Render different post cards dynamically */}
        {postsData.map((post, index) => (
          <IonCard className="post" key={index}>
            <IonCardHeader className="post-header">
              <div className="header-container">
                <IonAvatar>
                  <img
                    alt={`${post.company} logo`}
                    src={post.imageUrl} // Use the image URL from the post data
                  />
                </IonAvatar>
                <IonTitle className="title">{post.company}</IonTitle>
              </div>
            </IonCardHeader>
            <IonCardContent className="description">{post.content}</IonCardContent>

            {/* Conditionally render large attachment image if it exists */}
            {post.attachmentImageUrl && (
              <IonCardContent className="attachment-image">
                <IonImg src={post.attachmentImageUrl} alt={`${post.company} attachment`} />
              </IonCardContent>
            )}

            <IonCardContent className="comment">
              <IonInput placeholder="Leave a comment" />
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Homepage;
