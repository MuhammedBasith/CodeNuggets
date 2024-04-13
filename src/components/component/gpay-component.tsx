import { useState, useEffect } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function GpayComponent() {
  const [timeRemaining, setTimeRemaining] = useState(120); // Initial time in seconds (2 minutes)

  const handleDownloadQR = () => {
    // Add logic to download the QR code
    console.log("Downloading QR code...");
  };

  const handlePaymentDone = () => {
    // Add logic to handle payment completion
    console.log("Payment completed!");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1; // Decrease time by 1 second
        } else {
          clearInterval(timer); // Stop the timer when time reaches 0
          return 0;
        }
      });
    }, 1000); // Update time every second

    return () => clearInterval(timer); // Clean up interval on component unmount
  }, []); // Empty dependency array to run effect only once on component mount

  // Convert remaining seconds to display format (mm:ss)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <Card>
      <CardHeader>
        <div className="text-center space-y-2">
          <CardTitle className="text-xl">Initiating Payment</CardTitle>
          <CardDescription>Scan the QR code to make a payment of ₹29</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <p className="text-center text-sm">
          Click the “Download” button below to save the QR code. Open your UPI app, scan the QR code, and proceed to make the payment of ₹29.
        </p>
        <div className="w-full max-w-sm">
          {/* Display the QR code image */}
          <img
            alt="QR code"
            className="mx-auto rounded-lg overflow-hidden"
            height="200"
            src="/placeholder.svg"  // Replace with actual QR code image source
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
        </div>
        {/* Button to download the QR code */}
        <Button className="mx-auto bg-gray-800 text-white hover:bg-gray-700" size="sm" onClick={handleDownloadQR}>
          Download QR Code
        </Button>
        <div className="flex items-center space-x-2">
          {/* Display the remaining time for payment */}
          <span className="text-sm font-medium">Time remaining:</span>
          <span className="text-sm font-medium">{formatTime(timeRemaining)}</span>
        </div>
      </CardContent>
      <CardFooter className="border-t justify-center">
        {/* Button to confirm payment completion */}
        <Button className="bg-gray-800 text-white hover:bg-gray-700 mt-5" onClick={handlePaymentDone}>
          Payment Done
        </Button>
      </CardFooter>
    </Card>
  )
}
