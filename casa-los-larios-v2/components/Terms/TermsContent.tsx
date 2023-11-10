import React from "react";
import styles from "./Terms.module.css";

export const TermsContent: React.FC = () => {
  return (
    <div className={styles.termsContainer}>
      <h1>Terms of Service</h1>

      <section>
        <h2>1. Introduction</h2>
        <p>
          These Terms of Service ("Terms") govern your access to and use of our
          services, including our various websites, SMS, APIs, email
          notifications, applications, buttons, widgets, ads, commerce services
          (collectively, the "Services"), and any information, text, graphics,
          photos or other materials uploaded, downloaded or appearing on the
          Services (collectively referred to as "Content"). Your access to and
          use of the Services are conditioned on your acceptance of and
          compliance with these Terms. By accessing or using the Services you
          agree to be bound by these Terms.
        </p>
      </section>

      <section>
        <h2>2. Booking and Payment</h2>
        <p>
          When you book the apartment at Casa Los Larios, you agree to enter
          into a rental agreement with us. You are required to make payment in
          accordance with the payment schedule outlined at the time of booking.
          Failure to make timely payments may result in the cancellation of your
          booking without refund.
        </p>
      </section>

      <section>
        <h2>3. Cancellation Policy</h2>
        <p>
          You can cancel your booking up to 30 days before the start of your
          rental period for a full refund. Cancellations made less than 30 days
          before the rental period will not be eligible for a refund. Please
          consider travel insurance to protect against unexpected circumstances.
        </p>
      </section>

      <section>
        <h2>4. Use of the Property</h2>
        <p>
          The property is provided for normal holiday use and not for any
          commercial activities, parties, or events. The number of guests
          staying at the property must not exceed the number stated in your
          booking confirmation.
        </p>
      </section>

      <section>
        <h2>5. Limitation of Liability</h2>
        <p>
          Our liability for any claim arising from your rental of the apartment
          shall be limited to the amount of the rental fee paid. We are not
          responsible for any indirect, incidental, or consequential damages.
        </p>
      </section>

      <section>
        <h2>6. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the country/state in which Casa Los Larios is located, without
          regard to its conflict of law provisions.
        </p>
      </section>

      <section>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at
          <a href="mailto:info@casaloslarios.com"> info@casaloslarios.com</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsContent;