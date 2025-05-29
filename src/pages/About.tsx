import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Scissors, Heart, DollarSign, Instagram, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link to="/">
            <Button variant="ghost" className="text-green-400 hover:text-green-300 hover:bg-gray-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Booking
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-white">About Mando</h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main About Card */}
          <Card className="border-0 shadow-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-700">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full mb-6 mx-auto shadow-lg">
                <Scissors className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl text-white mb-4">
                Welcome! I'm Mando 👋
              </CardTitle>
              <p className="text-green-400 font-medium">
                College Student at University of California, Santa Cruz
              </p>
              <p className="text-gray-400 text-sm">
                Double Major: Computer Engineering & Applied Mathematics
              </p>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                I built this site for all my friends and clients to easily book haircuts—and to spread something that really matters to me.
              </p>
              
              <div className="bg-green-900/30 p-6 rounded-lg border border-green-400/20">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-green-400">My Pricing Philosophy</h3>
                </div>
                <p className="leading-relaxed">
                  My pricing is simple: <strong className="text-green-400">pay what you can</strong>.
                  If you're in a spot where you can pay a fair price, I appreciate that a lot. But if you're struggling right now, that's exactly why I do this.
                </p>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-red-400" />
                  <h3 className="text-xl font-semibold text-white">Everyone Deserves to Feel Confident</h3>
                </div>
                <p className="leading-relaxed">
                  Everyone deserves to feel confident and fresh—no matter their budget.
                  I'm a college student too, so I get it. Times can be tough. But that shouldn't stop you from getting a clean cut.
                </p>
              </div>

              <div className="text-center space-y-4">
                <p className="text-xl font-medium text-green-400">
                  So book your spot, pay what you can, and let's get you looking sharp.
                </p>
                <p className="text-lg text-white font-semibold">
                  I'm here for everyone. Always.
                </p>
              </div>

              {/* Contact Section */}
              <div className="bg-purple-900/30 border border-purple-400/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Get in Touch</h3>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    variant="outline" 
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900"
                    onClick={() => window.open('https://instagram.com/mando_t05', '_blank')}
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Follow @mando_t05
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900"
                    onClick={() => window.open('https://www.linkedin.com/in/armando-tamayo-518519335/', '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>

              <div className="text-center pt-6">
                <Link to="/">
                  <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 text-lg">
                    Book Your Appointment
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
