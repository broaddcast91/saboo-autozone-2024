import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
function PrivacyPolicy() {
  return (
    <>
      {/* <img
        src={require('../../assets/privacy_banner.webp')}
        className='w-full'
        alt='privacy banner'
      /> */}
      <Header />
      <div className="container mx-auto px-5">
        <p className="h1">Privacy Policy</p>
        <div className="my-4 space-y-1">
          <h5 className="font-semibold">
            Saboo Autozone (Ashok Leyland) Statement of Privacy
          </h5>
          <p className="text-sm">
            At Saboo Autozone we take your privacy seriously. Please read the
            following to learn more about our terms and conditions.
          </p>
        </div>
        <div className="my-4 space-y-1">
          <h5 className="font-semibold">What the terms and conditions cover</h5>
          <p className="text-sm">
            This policy covers Saboo Autozone's (Ashok Leyland) treatment of
            personally identifiable information collected when you are on the
            Saboo Autozone (Ashok Leyland) site and when you use our services.
            This policy also covers Saboo Autozone's (Ashok Leyland) treatment
            of any personally identifiable information that Saboo Autozone
            shares with you.
          </p>
          <p className="text-sm">
            This policy does not apply to the practices of companies that Saboo
            Autozone (Ashok Leyland) does not own, control, or employ.
          </p>
          <p className="text-sm">
            By providing your contact details, I hereby authorize Saboo Autozone
            to contact me. This authorization will override my registration on
            the NCPR. You have expressly authorized Saboo Autozone to contact
            you in the future through calls, SMS, or emails to inform you about
            our products.
          </p>
        </div>
        <div className="my-4 space-y-1">
          <h5 className="font-semibold">Information Collection and Use</h5>
          <p className="text-sm">
            Saboo Autozone (Ashok Leyland) collects personally identifiable
            information when you register for a Saboo Autozone (Ashok Leyland)
            account and when you choose our services and promotions.
            Additionally, Saboo Autozone (Ashok Leyland) may receive personally
            identifiable information from our business partners.
          </p>
          <p className="text-sm">
            When you register with Saboo Autozone (Ashok Leyland), we ask for
            your name, email address, birth date, gender, occupation, industry,
            and personal interests. Once you register with Saboo Autozone (Ashok
            Leyland) and sign in to our services, you are not anonymous to us.
          </p>
          <p className="text-sm">
            Saboo Autozone (Ashok Leyland) uses the information for three
            general purposes: to fulfill your requests for certain products and
            services, and to contact you about specials and new products.
          </p>
        </div>
        <div className="my-4 space-y-1">
          <h5 className="font-semibold">Information Sharing and Disclosure</h5>
          <p className="text-sm">
            Saboo Autozone (Ashok Leyland) will not sell or rent your Personally
            Identifiable Information to anyone.
          </p>
          <p className="text-sm">
            Saboo Autozone (Ashok Leyland) will only send Personally
            Identifiable Information about you in the following situations:
          </p>
          {/* <p className="text-sm">
            <li>We have consent to share the information</li>
          </p>
          <p className="text-sm">
            <li>
              We need to share your information to provide the product or
              service you have requested.
            </li>
          </p>
          <p className="text-sm">
            <li>We respond to subpoenas, court orders or legal process.</li>
          </p>
          <p className="text-sm">
            <li>
              When we find your action on the web site violates the Saboo
              Autozone (Ashok Leyland) terms and condition or any of your usage
              guidelines for specific products or services.
            </li>
          </p> */}
          <div style={{ marginTop: "-6px" }}>
            <div style={{ paddingBottom: "4px" }}>
              When we have your consent to share the information.
            </div>
            <div style={{ paddingBottom: "4px" }}>
              When we need to share your information to provide the product or
              service you have requested.
            </div>
            <div style={{ paddingBottom: "4px" }}>
              When we respond to subpoenas, court orders, or legal processes.
            </div>
            <div style={{ paddingBottom: "4px" }}>
              When we find that your actions on the website violate the Saboo
              Autozone (Ashok Leyland) terms and conditions or any usage
              guidelines for specific products or services.
            </div>
          </div>
        </div>
        <div className="my-4 space-y-1">
          <h5 className="font-semibold">Security</h5>
          <p className="text-sm">
            Your Saboo Autozone (Ashok Leyland) account information is
            password-protected for your privacy and security. We have taken
            adequate measures to secure access to your personal data.
          </p>
        </div>
        <div className="my-4 space-y-1">
          <h5 className="font-semibold">Changes to this Policy</h5>
          <p className="text-sm">
            Saboo Autozone (Ashok Leyland) may edit this policy from time to
            time. If we make any substantial changes, we will notify you by
            posting a prominent announcement on our pages.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default PrivacyPolicy;