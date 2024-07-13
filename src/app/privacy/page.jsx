'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function Page() {

  const router = useRouter()


  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-3xl">
  <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Privacy Policy</h1>
    <div className="max-h-[60vh] overflow-auto rounded-lg border bg-card p-6 text-card-foreground">
      <div className="space-y-4">
        <section>
          <section>
            <h2 className="text-xl font-semibold">Introduction</h2>
            <p>
              Overview of CodeNuggets' commitment to protecting your privacy.
              Brief description of what this privacy policy covers.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Information We Collect</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Personal Information</strong>: Name, email address, phone number, payment details, and any other information provided during registration.</li>
              <li><strong>Usage Data</strong>: Information about how you use the website, such as pages visited, time spent on pages, and other usage statistics.</li>
              <li><strong>Cookies and Tracking Technologies</strong>: Description of the cookies and tracking technologies used and their purposes.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">How We Use Your Information</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Service Delivery</strong>: To provide and manage the 3-hour Python live class.</li>
              <li><strong>Communication</strong>: To communicate with you regarding the class, updates, and promotional offers.</li>
              <li><strong>Improvement</strong>: To improve our services, website, and user experience.</li>
              <li><strong>Legal Compliance</strong>: To comply with legal obligations and protect against legal claims.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Sharing Your Information</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Third-Party Service Providers</strong>: Information shared with service providers who help us operate our business (e.g., payment processors, email services).</li>
              <li><strong>Legal Requirements</strong>: Disclosure of information if required by law or in response to legal processes.</li>
              <li><strong>Business Transfers</strong>: In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Data Security</h2>
            <p>Description of the measures taken to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Statement about the limitations of security measures and no guarantee of absolute security.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Your Data Protection Rights</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Access</strong>: Your right to request copies of your personal data.</li>
              <li><strong>Correction</strong>: Your right to request correction of inaccurate or incomplete data.</li>
              <li><strong>Deletion</strong>: Your right to request the deletion of your personal data.</li>
              <li><strong>Restriction</strong>: Your right to request the restriction of processing your personal data.</li>
              <li><strong>Objection</strong>: Your right to object to our processing of your personal data.</li>
              <li><strong>Data Portability</strong>: Your right to request the transfer of your data to another organization or directly to you.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Children’s Privacy</h2>
            <p>Statement about not knowingly collecting personal information from children under the age of 13 (or relevant age in your jurisdiction). Instructions for parents or guardians on what to do if they believe their child has provided personal information.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Changes to This Privacy Policy</h2>
            <p>Information about how and when changes to the privacy policy will be communicated. Statement encouraging users to review the privacy policy periodically for any updates.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p>Contact details for any questions or concerns regarding this privacy policy. Instructions on how to exercise data protection rights.</p>
          </section>
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
