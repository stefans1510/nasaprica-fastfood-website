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
            Dođite i posetite nas ili nas kontaktirajte
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
                  Marijane Gregoran 43a<br />
                  Beograd<br />
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Clock size={24} />
                  Radno vreme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Ponedeljak - Subota:</span>
                    <span className="font-medium">09:00 - 23:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nedelja:</span>
                    <span className="font-medium">09:00 - 20:00</span>
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
                  variant="default" 
                  className="w-full"
                  onClick={() => window.open('https://instagram.com/_nasa_prica_belgrade', '_blank')}
                >
                  <Instagram size={20} className="mr-2" />
                  @_nasa_prica_belgrade
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
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8005.632919385203!2d20.508210617223774!3d44.81303486110927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7b074460cbbb%3A0x83f5dc8fcc5ffa26!2z0J3QsNGI0LAg0J_RgNC40YfQsA!5e0!3m2!1sen!2srs!4v1756120616606!5m2!1sen!2srs"
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