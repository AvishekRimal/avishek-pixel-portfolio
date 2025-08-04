import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = [
    {
      degree: ' Bachelor of Information Technology Management (BITM)',
      institution: 'Nepal Commerce Campus',
      location: 'Minbhawan, Kathmandu, Nepal',
      years: '2021 - Present',
      status: '7th Semester Running',
      description: 'Pursuing a comprehensive degree with a focus on business and management principles, while integrating my passion for technology and its application in the commercial sector.',
      achievements: [
        'Consistently maintaining a strong academic record.',
        'Actively participating in college tech workshops and seminars.',
        'Developing a web-based final year project focused on business solutions.'
      ],
      relevantCourses: [
        'Management Information Systems',
        'Database Management',
        'E-commerce',
        'Business Communication',
        'Financial Accounting',
        'Organizational Behavior'
      ]
    },
    {
      degree: '+2 (Higher Secondary Education)',
      institution: 'Bhanubhakta Memorial College',
      location: 'Kathmandu, Nepal',
      years: '2019 - 2021',
      gpa: '3.68/4.0',
      description: 'Completed higher secondary education with a focus on management, providing a strong foundation in economics, accounting, and business studies.',
      achievements: [
        'Awarded for High Academic Achievement.',
        'Active member of the Student Council.'
      ],
      relevantCourses: [
        'Business Studies',
        'Economics',
        'Accountancy',
        'Computer Science'
      ]
    },
    {
      degree: 'Secondary Education Examination (SEE)',
      institution: 'Karma Sangha Academy',
      location: 'Nuwakot, Nepal',
      years: '2018',
      gpa: '3.25/4.0',
      description: 'Successfully completed secondary education, building a strong disciplinary and academic base.',
      achievements: [
        'Secured Distinction in final examinations.',
        'Participated in inter-school science exhibitions.'
      ],
      relevantCourses: [
        'Computer Science',
        'Optional Mathematics',
        'Science'
      ]
    }
  ];

  const certifications = [
    {
      name: 'MERN Stack Development',
      issuer: 'Broadway Infosys Nepal',
      year: '2024',
      credentialId: 'BI-MERN-12345',
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST API', 'JWT']
    },
    {
      name: 'Web Design & Development',
      issuer: 'Broadway Infosys Nepal',
      year: '2023',
      credentialId: 'BI-WD-67890',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP/MySQL', 'jQuery']
    },
    {
      name: 'C and C++ Programming',
      issuer: 'Broadway Infosys Nepal',
      year: '2022',
      credentialId: 'BI-C-54321',
      skills: ['C', 'C++', 'OOP', 'Pointers', 'Data Structures', 'Problem Solving']
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic background and continuous learning journey in technology and software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formal Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-semibold mb-6 flex items-center">
              <GraduationCap className="w-8 h-8 mr-3 text-primary" />
              Formal Education
            </h3>
            
            {education.map((edu, index) => (
              <Card 
                key={edu.degree}
                className="card-glass animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h4 className="text-xl font-semibold text-primary mb-2 md:mb-0">
                      {edu.degree}
                    </h4>
                    {edu.gpa ? (
                      <Badge variant="secondary" className="self-start">
                        GPA: {edu.gpa}
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="self-start bg-primary/20 text-primary">
                        {edu.status}
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-medium">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.years}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="font-semibold mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-primary" />
                      Achievements
                    </h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3">Relevant Coursework</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course) => (
                        <Badge key={course} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-semibold mb-6 flex items-center">
              <Award className="w-8 h-8 mr-3 text-primary" />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={cert.name}
                  className="card-glass card-hover animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                        <p className="text-primary font-medium">{cert.issuer}</p>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <Badge variant="secondary">{cert.year}</Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          ID: {cert.credentialId}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium mb-2">Skills Gained</h5>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} className="text-xs bg-primary/10 text-primary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Continuous Learning */}
            <Card className="card-glass">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold mb-3">Continuous Learning</h4>
                <p className="text-muted-foreground mb-4">
                  I believe in lifelong learning and staying updated with the latest technologies and best practices in web development.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['React 18', 'TypeScript 5', 'Next.js 14', 'Tailwind CSS 3', 'Web Performance'].map((topic) => (
                    <Badge key={topic} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;