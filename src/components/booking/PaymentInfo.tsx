
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, CreditCard, Banknote, X } from 'lucide-react';

export const PaymentInfo = () => {
  return (
    <Card className="border-0 shadow-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl text-white">
          <DollarSign className="w-5 h-5 text-green-400" />
          Payment Options - Pay What You Can
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-green-900/30 border border-green-400/30 p-4 rounded-lg">
            <p className="text-green-200 text-sm font-medium mb-3">
              Remember: Pay what you can. Everyone deserves to look good no matter their financial situation! 💚
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Accepted Payments */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-green-400" />
                Accepted
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-gray-700/50 rounded">
                  <span className="text-gray-300">Cash</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-700/50 rounded">
                  <span className="text-gray-300">Venmo</span>
                  <span className="text-blue-400 font-mono">@mandisimo_</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-700/50 rounded">
                  <span className="text-gray-300">CashApp</span>
                  <span className="text-green-400 font-mono">$MandoBaby05</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-700/50 rounded">
                  <span className="text-gray-300">PayPal</span>
                  <span className="text-blue-400 font-mono">@Mand0Wrld</span>
                </div>
              </div>
            </div>

            {/* Not Accepted */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <X className="w-4 h-4 text-red-400" />
                Not Available
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-red-900/20 border border-red-400/20 rounded">
                  <span className="text-gray-300">Zelle</span>
                  <span className="text-red-400">✗</span>
                </div>
                <p className="text-xs text-gray-400 italic">
                  Zelle isn't working right now, sorry!
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
