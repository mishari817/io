import React, { useState } from 'react';
import { mockData } from '../data/mock';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { Phone, MessageCircle, Shield, Star, CheckCircle, Sparkles, Car, Sun, DollarSign, Clock } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { Toaster } from './ui/toaster';

const Homepage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleContactClick = () => {
    setIsSubmitting(true);
    // Mock contact functionality
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "تم إرسال طلبك بنجاح",
        description: "سيتم التواصل معك خلال دقائق",
      });
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    // Mock WhatsApp functionality
    toast({
      title: "تم فتح واتساب",
      description: "جاري توجيهك لمحادثة واتساب",
    });
  };

  return (
    <div className="homepage-container">
      {/* Header */}
      <header className="header">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="logo">
            <h1 className="text-2xl font-bold text-orange-600">المالكي</h1>
            <p className="text-sm text-gray-600">حماية السيارات الاحترافية</p>
          </div>
          <div className="header-contact">
            <Button 
              variant="outline" 
              onClick={handleContactClick}
              className="ml-2"
            >
              <Phone className="w-4 h-4 ml-2" />
              {mockData.contact.phone}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="hero-content max-w-4xl mx-auto">
            <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6">
              {mockData.hero.title}
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl mb-8 text-gray-700">
              {mockData.hero.subtitle}
            </p>
            <div className="hero-buttons flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="cta-primary text-lg px-8 py-4"
                onClick={handleContactClick}
                disabled={isSubmitting}
              >
                <Sparkles className="w-5 h-5 ml-2" />
                {isSubmitting ? "جاري الإرسال..." : mockData.hero.primaryCta}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="cta-secondary text-lg px-8 py-4"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                {mockData.hero.secondaryCta}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="cta-additional text-lg px-8 py-4"
                onClick={handleContactClick}
              >
                <Clock className="w-5 h-5 ml-2" />
                {mockData.hero.additionalCta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-4xl font-bold text-center mb-12">
            {mockData.education.title}
          </h2>
          <div className="education-grid grid md:grid-cols-3 gap-8">
            {mockData.education.points.map((point, index) => (
              <Card key={index} className="education-card">
                <CardHeader>
                  <div className="icon-wrapper mb-4">
                    {index === 0 && <Shield className="w-12 h-12 text-orange-600" />}
                    {index === 1 && <Sun className="w-12 h-12 text-orange-600" />}
                    {index === 2 && <DollarSign className="w-12 h-12 text-orange-600" />}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{point}</p>
                  <Button 
                    className="cta-card w-full"
                    onClick={handleContactClick}
                    size="sm"
                  >
                    <Phone className="w-4 h-4 ml-2" />
                    تواصل معنا
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-4xl font-bold text-center mb-12">
            {mockData.benefits.title}
          </h2>
          <div className="benefits-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.benefits.list.map((benefit, index) => (
              <div key={index} className="benefit-item text-center">
                <div className="benefit-icon mb-4">
                  <CheckCircle className="w-8 h-8 text-orange-600 mx-auto" />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-4xl font-bold text-center mb-12">
            {mockData.whyUs.title}
          </h2>
          <div className="why-us-grid grid md:grid-cols-2 gap-8">
            {mockData.whyUs.points.map((point, index) => (
              <Card key={index} className="why-us-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Star className="w-6 h-6 text-orange-600 ml-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="offer-section py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="offer-content max-w-3xl mx-auto">
            <Badge className="offer-badge text-lg px-6 py-2 mb-6">
              {mockData.offer.badge}
            </Badge>
            <h2 className="offer-title text-4xl font-bold mb-8">
              {mockData.offer.title}
            </h2>
            <Button 
              size="lg" 
              className="cta-primary text-xl px-10 py-6"
              onClick={handleContactClick}
              disabled={isSubmitting}
            >
              <Sparkles className="w-6 h-6 ml-2" />
              {isSubmitting ? "جاري الإرسال..." : mockData.offer.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-4xl font-bold text-center mb-12">
            الأسئلة الشائعة
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {mockData.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-4xl font-bold text-center mb-12">
              {mockData.blog.title}
            </h2>
            <div className="blog-content">
              {mockData.blog.content.map((section, index) => (
                <Card key={index} className="blog-card mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl text-orange-600">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-12">
        <div className="container mx-auto px-4">
          <div className="footer-content grid md:grid-cols-3 gap-8">
            <div className="footer-section">
              <h3 className="footer-title text-xl font-bold mb-4">مؤسسة المالكي</h3>
              <p className="text-gray-600">
                أفضل خدمات حماية السيارات في جدة
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-subtitle font-semibold mb-4">خدماتنا الأخرى</h4>
              <ul className="footer-services">
                {mockData.footer.services.map((service, index) => (
                  <li key={index} className="mb-2 text-gray-600">
                    <Car className="w-4 h-4 inline ml-2" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-subtitle font-semibold mb-4">تواصل معنا</h4>
              <div className="contact-info">
                <div className="contact-item mb-3">
                  <Phone className="w-5 h-5 inline ml-2 text-orange-600" />
                  <span>{mockData.contact.phone}</span>
                </div>
                <div className="contact-item mb-3">
                  <MessageCircle className="w-5 h-5 inline ml-2 text-orange-600" />
                  <span>واتساب: {mockData.contact.whatsapp}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              © 2024 مؤسسة المالكي - جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </footer>

      {/* Fixed CTA */}
      <div className="fixed-cta">
        <div className="fixed-cta-content">
          <Button 
            className="cta-phone"
            onClick={handleContactClick}
            disabled={isSubmitting}
          >
            <Phone className="w-5 h-5 ml-2" />
            اتصال مباشر
          </Button>
          <Button 
            variant="outline"
            className="cta-whatsapp"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="w-5 h-5 ml-2" />
            واتساب
          </Button>
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default Homepage;