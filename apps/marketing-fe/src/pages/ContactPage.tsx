import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              צור קשר
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              יש לך שאלה? רוצה לדעת עוד? נשמח לשמוע ממך!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 md:py-16 pb-24 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Mobile: Form First, then Contact Info */}
            <div className="block md:hidden space-y-6">
              {/* Contact Form - Mobile */}
              <div className="bg-card border rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">שלח לנו הודעה</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                    ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className="text-sm">שם מלא *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="הכנס את שמך המלא"
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm">אימייל *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm">טלפון *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="050-123-4567"
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm">הודעה *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="כתוב את הודעתך כאן..."
                      rows={4}
                      className="mt-1.5 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      'שולח...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 ml-2" />
                        שלח הודעה
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Information - Mobile */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold mb-4">פרטי התקשרות</h2>

                <div className="space-y-3">
                  <a href="tel:0502265757" className="flex items-center gap-3 p-4 bg-card border rounded-lg hover:border-primary/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-right">
                      <h3 className="font-semibold text-sm mb-0.5">טלפון</h3>
                      <p className="text-sm text-muted-foreground">050-226-5757</p>
                    </div>
                  </a>

                  <a href="mailto:info@tradeflow.ai" className="flex items-center gap-3 p-4 bg-card border rounded-lg hover:border-primary/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-right">
                      <h3 className="font-semibold text-sm mb-0.5">אימייל</h3>
                      <p className="text-sm text-muted-foreground">info@tradeflow.ai</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-4 bg-card border rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-right">
                      <h3 className="font-semibold text-sm mb-0.5">כתובת</h3>
                      <p className="text-sm text-muted-foreground">תל אביב, ישראל</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-card border rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-right">
                      <h3 className="font-semibold text-sm mb-0.5">שעות פעילות</h3>
                      <div className="text-sm text-muted-foreground space-y-0.5">
                        <p>ראשון - חמישי: 09:00 - 18:00</p>
                        <p>שישי: 09:00 - 14:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Two Columns */}
            <div className="hidden md:grid md:grid-cols-2 gap-8">
              {/* Contact Information - Desktop */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">פרטי התקשרות</h2>
                  <p className="text-muted-foreground mb-6">
                    צוות TradeFlow AI כאן כדי לעזור לך. אנחנו זמינים בכל ערוץ תקשורת שנוח לך.
                  </p>
                </div>

                <div className="space-y-4">
                  <a href="tel:0502265757" className="flex items-start gap-4 p-4 bg-card border rounded-lg hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">טלפון</h3>
                      <p className="text-muted-foreground">050-226-5757</p>
                    </div>
                  </a>

                  <a href="mailto:info@tradeflow.ai" className="flex items-start gap-4 p-4 bg-card border rounded-lg hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">אימייל</h3>
                      <p className="text-muted-foreground">info@tradeflow.ai</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-card border rounded-lg">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">כתובת</h3>
                      <p className="text-muted-foreground">תל אביב, ישראל</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card border rounded-lg">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">שעות פעילות</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>ראשון - חמישי: 09:00 - 18:00</p>
                        <p>שישי: 09:00 - 14:00</p>
                        <p>שבת: סגור</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - Desktop */}
              <div className="bg-card border rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">שלח לנו הודעה</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="fullName-desktop">שם מלא *</Label>
                    <Input
                      id="fullName-desktop"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="הכנס את שמך המלא"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email-desktop">אימייל *</Label>
                    <Input
                      id="email-desktop"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone-desktop">טלפון *</Label>
                    <Input
                      id="phone-desktop"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="050-123-4567"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message-desktop">הודעה *</Label>
                    <Textarea
                      id="message-desktop"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="כתוב את הודעתך כאן..."
                      rows={5}
                      className="mt-2 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      'שולח...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 ml-2" />
                        שלח הודעה
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

