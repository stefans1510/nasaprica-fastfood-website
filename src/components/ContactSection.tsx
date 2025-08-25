import React from 'react';
import { MapPin, Clock, Instagram } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <div id="kontakt" className="bg-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Kontakt i lokacija
          </h2>
          <p className="text-muted-foreground text-lg">
            Dođite i posjetite nas ili nas kontaktirajte
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MapPin size={24} />
                  Adresa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Zmaja od Bosne 8<br />
                  71000 Sarajevo<br />
                  Bosna i Hercegovina
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Clock size={24} />
                  Radno vrijeme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Ponedjeljak - Petak:</span>
                    <span className="font-medium">11:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Subota - Nedjelja:</span>
                    <span className="font-medium">12:00 - 24:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Instagram size={24} />
                  Pratite nas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Budite u toku sa našim najnovijim ponudama i specijalitetima
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://instagram.com/nasaprica', '_blank')}
                >
                  <Instagram size={20} className="mr-2" />
                  @nasaprica
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px]">
            <Card className="h-full">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.6587!2d18.4058!3d43.8563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758cbb1ed719bd1%3A0x562ecda6de87b33e!2sZmaja%20od%20Bosne%208%2C%20Sarajevo%2071000!5e0!3m2!1sen!2sba!4v1629789456789!5m2!1sen!2sba"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '0.5rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Naša Priča lokacija"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;