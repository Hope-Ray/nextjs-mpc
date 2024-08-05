import React from 'react'
import ThankYouPage from './ThankYouPage';

export const metadata = {
  title: 'Thank You',
  description: 'Thank You for contacting',
  alternates: {
    canonical: 'https://mypainclinicglobal.com/thankyou',
  },
  openGraph: {
    title: 'Thank You for contacting',
    description: `Thank You for contacting`,
    url: 'https://mypainclinicglobal.com/thankyou',
    siteName: 'My Pain Clinic',
    images: [
      {
        url: 'https://mypainclinicglobal.com/images/main-slider/banners1.jpg',
      },
    ],
    type: 'website',
  },
}

const ThankYou = () => {
  return (
    <div>
      <ThankYouPage></ThankYouPage>
    </div>
  )
}

export default ThankYou;