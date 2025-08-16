// import { useState } from 'react';
// import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const { toast } = useToast();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Simulate form submission
//     setTimeout(() => {
//       toast({
//         title: "Message Sent!",
//         description: "Thank you for your message. I'll get back to you soon!",
//       });
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       setIsLoading(false);
//     }, 2000);
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: 'Email',
//       value: 'avishek.rimal2002@gmail.com',
//       href: 'mailto:avishek.rimal2002@gmail.com'
//     },
//     {
//       icon: Phone,
//       label: 'Phone',
//       value: '+977 9841177198',
//       href: 'tel:+9779841177198'
//     },
//     {
//       icon: MapPin,
//       label: 'Location',
//       value: 'Kathmandu, Nepal',
//       href: '#'
//     }
//   ];

//   const socialLinks = [
//     {
//       icon: Github,
//       label: 'GitHub',
//       href: 'https://github.com/avishekrimal'
//     },
//     {
//       icon: Linkedin,
//       label: 'LinkedIn',
//       href: 'https://www.linkedin.com/in/avishek-rimal-67a63a22b/'
//     },
//     {
//       icon: Instagram,
//       label: 'Instagram',
//       href: 'https://www.instagram.com/rimalavishek/'
//     }
//   ];

//   return (
//     <section id="contact" className="section-padding bg-secondary/30">
//       <div className="container-custom">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
//             Get In <span className="text-gradient">Touch</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             I'm always excited to discuss new opportunities, collaborate on interesting projects, 
//             or just have a chat about technology and development.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-display font-semibold mb-6">
//                 Let's Start a Conversation
//               </h3>
//               <p className="text-muted-foreground leading-relaxed mb-8">
//                 Whether you have a project in mind, need technical consultation, or just want to 
//                 connect, I'd love to hear from you. Feel free to reach out through any of the 
//                 channels below.
//               </p>
//             </div>

//             {/* Contact Details */}
//             <div className="space-y-6">
//               {contactInfo.map((contact, index) => (
//                 <Card 
//                   key={contact.label}
//                   className="card-glass card-hover animate-fade-in"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <CardContent className="p-6">
//                     <a 
//                       href={contact.href}
//                       className="flex items-center space-x-4 group"
//                     >
//                       <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
//                         <contact.icon className="w-6 h-6 text-primary" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-muted-foreground">{contact.label}</p>
//                         <p className="font-medium group-hover:text-primary transition-colors duration-300">
//                           {contact.value}
//                         </p>
//                       </div>
//                     </a>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social) => (
//                   <a
//                     key={social.label}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
//                   >
//                     <social.icon className="w-6 h-6" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <Card className="card-glass">
//             <CardHeader>
//               <CardTitle className="text-2xl font-display">Send Message</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium mb-2">
//                       Name *
//                     </label>
//                     <Input
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                       placeholder="Your full name"
//                       className="w-full"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium mb-2">
//                       Email *
//                     </label>
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                       placeholder="your.email@example.com"
//                       className="w-full"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block text-sm font-medium mb-2">
//                     Subject *
//                   </label>
//                   <Input
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="What's this about?"
//                     className="w-full"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium mb-2">
//                     Message *
//                   </label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Tell me about your project or inquiry..."
//                     rows={6}
//                     className="w-full resize-none"
//                   />
//                 </div>

//                 <Button 
//                   type="submit" 
//                   className="w-full btn-hero"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? (
//                     <div className="flex items-center">
//                       <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
//                       Sending...
//                     </div>
//                   ) : (
//                     <>
//                       <Send className="w-4 h-4 mr-2" />
//                       Send Message
//                     </>
//                   )}
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Quick Contact CTA */}
//         <div className="mt-16 text-center">
//           <Card className="card-glass max-w-2xl mx-auto">
//             <CardContent className="p-8">
//               <h3 className="text-xl font-display font-semibold mb-4">
//                 Prefer a Quick Chat?
//               </h3>
//               <p className="text-muted-foreground mb-6">
//                 Sometimes a conversation is better than a long email thread. 
//                 Feel free to call or schedule a meeting.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button 
//                   variant="outline"
//                   onClick={() => window.open('tel:+9779841177198', '_self')}
//                 >
//                   <Phone className="w-4 h-4 mr-2" />
//                   Call Now
//                 </Button>
//                 {/* <Button 
//                   className="btn-hero"
//                   onClick={() => window.open('mailto:avishek.rimal@email.com?subject=Meeting Request', '_self')}
//                 >
//                   <Mail className="w-4 h-4 mr-2" />
//                   Schedule Meeting
//                 </Button> */}
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('subject', formData.subject);
      form.append('message', formData.message);
      form.append('_captcha', 'false');

      const res = await fetch('https://formsubmit.co/ajax/avishek.rimal2002@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: form
      });

      const result = await res.json();

      if (result.success === 'true') {
        toast({
          title: 'Message Sent!',
          description: "Thank you for your message. I'll get back to you soon!"
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      toast({
        title: 'Error!',
        description: 'Something went wrong while sending your message.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'avishek.rimal2002@gmail.com',
      href: 'mailto:avishek.rimal2002@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+977 9841177198',
      href: 'tel:+9779841177198'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kathmandu, Nepal',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/avishekrimal'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/avishek-rimal-67a63a22b/'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/rimalavishek/'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, or just have a chat about technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind, need technical consultation, or just want to connect, I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card key={contact.label} className="card-glass card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <a href={contact.href} className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <contact.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors duration-300">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-glass">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Your message..."
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" className="w-full btn-hero" disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
