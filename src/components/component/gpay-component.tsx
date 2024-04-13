import { useState, useEffect } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function GpayComponent() {
  const [timeRemaining, setTimeRemaining] = useState(120); // Initial time in seconds (2 minutes)
  const [isPaymentEnabled, setIsPaymentEnabled] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPaymentComplete(true); // Set loading state to true when the form is submitted
    // Here you can perform additional validation or submit the form data
    // For demonstration purposes, let's simulate an API call delay
  };

  const handleDownloadQR = () => {
    // Replace this with the logic to download the QR code image
    const downloadLink = document.createElement('a');
    downloadLink.href = './gpay-qr-copy.png'; // Replace with the actual URL of the QR code image
    downloadLink.download = 'CodeNuggets-Gpay-QR.png'; // Specify the desired file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    console.log("Downloading QR code...");
  };


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime > 0) {
          const newTime = prevTime - 1;
          if (newTime === 80) {
            setIsPaymentEnabled(true); // Enable payment button when timer reaches 1:30
          }
          return newTime; // Decrease time by 1 second
        } else {
          clearInterval(timer); // Stop the timer when time reaches 0
          return 0;
        }
      });
    }, 1000); // Update time every second

    return () => clearInterval(timer); // Clean up interval on component unmount
  }, []); // Empty dependency array to run effect only once on component mount

  // Convert remaining seconds to display format (mm:ss)
  const formatTime = (seconds: any) => {
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
            src='./gpay-qr-copy.png'
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
          <span className="text-sm text-red-600 font-medium">Time remaining:</span>
          <span className="text-sm text-red-600 font-medium">{formatTime(timeRemaining)}</span>
        </div>
        {/* Message reminding the user not to close or refresh the page */}
        <p className="text-center text-sm text-gray-500 mt-3">
          <strong>Do not close or refresh this window until payment is completed.</strong> Once payment is done, return here and click the “Payment Done” button.
        </p>
      </CardContent>
      <CardFooter className="border-t justify-center">
        {/* Payment Done button with dynamic disabled state */}
        <Button
          className={`bg-gray-800 text-white hover:bg-gray-700 mt-5 ${isPaymentEnabled ? '' : 'opacity-50 cursor-not-allowed'}`}
          onClick={handleSubmit}
          disabled={!isPaymentEnabled}
        >
          Payment Done  
        </Button>
      </CardFooter>
    </Card>
  )
}
