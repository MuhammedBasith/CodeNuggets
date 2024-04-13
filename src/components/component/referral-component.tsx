import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ReferralComponent() {
  return (
    <Card className="w-full max-w-sm mx-auto p-4 bg-white dark:bg-black text-gray-800 dark:text-gray-200 rounded-lg shadow-lg">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-lg font-bold">Payment Completed</CardTitle>
        <CardDescription>
          Congratulations! You are now eligible to join our exclusive Python group and earn money and exciting rewards through referrals.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Share your unique referral code with friends to earn rewards together. Your referral code is displayed below:
          </p>
          <div className="flex items-center space-x-2 mt-2">
            <Label className="sr-only" htmlFor="referral-code">
              Referral Code
            </Label>
            <Input
              id="referral-code"
              readOnly
              value="AC3B4GH" // Replace with your actual referral code from state or props
              className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2"
            />
            <Button
              size="sm"
              className="bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-700 rounded-md px-3 py-2"
              onClick={copyReferralLink}
            >
              Copy Referral Link
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          className="w-full bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-700 rounded-md px-4 py-2"
          onClick={() => {
            // Add logic to handle adding to WhatsApp
          }}
        >
          Add to WhatsApp
        </Button>
      </CardFooter>
    </Card>
  )
}
