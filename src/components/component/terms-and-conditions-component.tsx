'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function TermsAndConditionsComponent() {

  const router = useRouter()

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Terms and Conditions</h1>
        <div className="max-h-[60vh] overflow-auto rounded-lg border bg-card p-6 text-card-foreground">
          <div className="space-y-4">
            <section>
              <h2 className="text-xl font-semibold">Introduction</h2>
              <p>
                Welcome to CodeNuggets. By accessing or using our website and services, you agree to be bound by these
                terms and conditions and our privacy policy.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold">Acceptance of Terms</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  By registering for any CodeNuggets Live Class, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not register for the class.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold">Registration and Payment</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Registration is confirmed only upon full payment of the class fee.
                </li>
                <li>
                  Payment must be made through the provided payment gateway.
                </li>
                <li>
                  You are responsible for providing accurate and complete information during the registration process.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold">Class Schedule and Access</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Classes will be conducted online at the specified date and time.
                </li>
                <li>
                  Access details and instructions will be provided upon successful registration.
                </li>
                <li>
                  You are responsible for ensuring you have the necessary hardware, software, and internet connection to attend the class.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold">Refund and Cancellation Policy</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  All payments are non-refundable.
                </li>
                <li>
                  If CodeNuggets cancels a class for any reason, you will be entitled to a full refund or the option to reschedule.
                </li>
                <li>
                  No refunds or credits will be issued for participant cancellations or no-shows.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold">Class Content and Materials</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  All class content and materials provided by CodeNuggets are for personal use only.
                </li>
                <li>
                  Unauthorized distribution, reproduction, or sharing of class content and materials is strictly prohibited.
                </li>
                <li>
                  CodeNuggets retains all intellectual property rights to the class content and materials.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold">Participant Conduct</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Participants are expected to maintain professional conduct during the class.
                </li>
                <li>
                  Disruptive or inappropriate behavior may result in removal from the class without a refund.
                </li>
                <li>
                  You are responsible for ensuring that your participation does not infringe on the rights of others.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold">Privacy and Data Protection</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  CodeNuggets respects your privacy and will handle your personal information in accordance with applicable data protection laws.
                </li>
                <li>
                  Your information will be used solely for the purposes of administering the class and will not be shared with third parties without your consent, except as required by law.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold">Referral Program</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Participants can earn money by referring new students to CodeNuggets Live Classes.
                </li>
                <li>
                  A minimum of two successful referrals is required before earning ₹10 per additional referral, up to a maximum of ₹1000 per person.
                </li>
                <li>
                  Referrals are considered successful only when the referred students complete their registration and payment.
                </li>
                <li>
                  CodeNuggets reserves the right to verify the validity of referrals and to withhold payments if fraudulent activity is suspected.
                </li>
                <li>
                  CodeNuggets reserves the right to modify or terminate the referral program at any time without prior notice.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold">Liability</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  CodeNuggets will not be liable for any direct, indirect, incidental, or consequential damages arising from your participation in the class.
                </li>
                <li>
                  You agree to indemnify and hold CodeNuggets harmless from any claims, damages, or expenses arising from your violation of these Terms and Conditions.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold">Governing Law</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  These Terms and Conditions are governed by and construed in accordance with the laws of India.
                </li>
                <li>
                  Any disputes arising out of or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of India.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold">Modifications to Terms and Conditions</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  CodeNuggets reserves the right to modify these Terms and Conditions at any time.
                </li>
                <li>
                  Any changes will be effective immediately upon posting on the CodeNuggets website or notifying you via email.
                </li>
                <li>
                  Continued participation in the class after any such changes constitutes your acceptance of the new Terms and Conditions.
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => {router.back()}}
            className="relative group/btn bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] hover:scale-105 transition-transform duration-300"
          >Back</Button>
        </div>
      </div>
    </div>
  )
}
