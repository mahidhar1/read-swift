import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-3 gap-8 px-6">
        <div>
          <h3 className="font-bold text-xl mb-4">ReadSwift</h3>
          <p className="text-gray-400">
            Transforming readers into speed champions
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>About</li>
            <li>Contact</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="flex space-x-4">
            {/* Social icons would go here */}
          </div>
        </div>
      </div>
      <Separator className="my-6 bg-gray-700" />
      <div className="text-center text-gray-500">
        © 2024 ReadSwift. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
