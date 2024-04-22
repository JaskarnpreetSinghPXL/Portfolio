'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ActivityCard from '@/components/ActivityCard';
import { act } from '@react-three/fiber';

const activityData = [
  {
    image: '/resources/activities/1.jpg',
    category: 'seminarie',
    name: 'Prototyping van een full-stack applicatie - Accenture',
    description:
      'Hier werd de core van een full-stack applicatie besproken en hoe deze in elkaar zit ook met een paar praktische voorbeelden.',
  },
  {
    image: '/resources/activities/1.jpg',
    category: 'seminarie',
    name: 'Drinking a river of IoT data using Aka.net - Axxes',
    description:
      'In deze seminarie is er meer informatie gegeven over Aka.net samen met een praktisch voorbeeld.',
  },
  {
    image: '/resources/activities/1.jpg',
    category: 'seminarie',
    name: 'Crashcourse design - Axxes',
    description:
      'Dit was een crashcourse om kennis te maken van verschillende design principes, dit ging gepaard met een eigen logo maken en een animatie.',
  },
  {
    image: '/resources/activities/1.jpg',
    category: 'seminarie',
    name: 'Rapid app development - Inetum-Realdolmen',
    description:
      'In deze seminarie is er uitleg gegeven over low-code en hoe dit werkt. Hier hebben we samen een applicatie gemaakt genaamd Candy delivery.',
  },
  {
    image: '/resources/activities/1.jpg',
    category: 'seminarie',
    name: 'Application Observability -AE',
    description:
      'Deze seminarie ging in op applicatie-observability, in docker- en microservices-omgevingen, inclusief het belang van metrics, logging en tracing, terwijl enkele mythes werden ontkracht en tools zoals Prometheus, Loki, Jaeger en Grafana werden besproken, met een praktische demonstratie.',
  },
  {
    image: '/resources/activities/1.jpg',
    category: 'seminarie',
    name: 'Dark launches and gradual release - Cegeka',
    description:
      'Dit gaat over de implementatie van dark launches en gradual releases, met praktische voorbeelden zoals het Qpark-incident.',
  },
  {
    image: '/resources/activities/1.jpg',
    category: 'seminarie',
    name: 'Quantum computing, een demystificatie',
    description:
      'Het seminarie ging over de potentie van quantum computing het benadrukt vooral complexe berekeningen en diverse toepassingen in wetenschap en bedrijfsleven, met een focus op het brengen van bruikbare quantum computing naar de wereld en het waarborgen van de veiligheid ervan.',
  },
  {
    image: '/resources/activities/1.jpg',
    category: 'seminarie',
    name: "OWASP Top Ten risico\\'s - ACA group",
    description:
      'Deze seminarie was vooral gefocust op security met een practische opdracht over het welbekende Juice shop.',
  },
  {
    image: '/resources/activities/1.jpg',
    category: 'innovatie',
    name: 'Introductie in UX-Design - Wisemen',
    description:
      'Dit was een introductie tot UX-design, hier hebben de sprekers Sam Vermeylen en Brecht Sluismans uitgelegd hoe applicaties ontworpen worden en meer informatie gegeven hebben over user experience.',
  },
  {
    image: '/resources/activities/1.jpg',
    category: 'innovatie',
    name: 'User Center Design - Appfoundry, Humix (Xplore group)',
    description:
      'Dit was een sessie in gedeeld in theorie over user center design en de UX-principes en een meer praktische opdracht om meer inzichten te geven over de noden van een klant.',
  },
  {
    image: '/resources/activities/1.jpg',
    category: 'innovatie',
    name: 'UI/UX - Appfoundry, Humix (Xplore group)',
    description:
      'Dit was meer inzichtelijke sessie rond wireframing, en prototypes uit te werken. Ook was er bijkomend beetje meer theorie over User Testing, Design Handoff. Met uiteindelijk een pitch van een praktische opdracht.',
  },
  {
    image: '/resources/activities/1.jpg',
    category: 'hackathon',
    name: 'UI/UX - Appfoundry, Humix (Xplore group)',
    description:
      'Gedurende een avond werkten we aan het bedenken van een oplossing voor een probleem dat ons werd voorgelegd. Van het bedenken van ideeën tot het pitchen ervan voor een jury, het hele proces werd doorgelopen.',
  },
  {
    image: '/resources/activities/1.jpg',
    category: 'popsessie',
    name: 'POPping',
    description:
      'Tijdens deze sessie was er een focus gelegd op het versterken van het zelfinzicht en groepsdynamiek.',
  },
  {
    image: '/resources/activities/1.jpg',
    category: 'popsessie',
    name: 'Brein aan het werk! Niet storen!',
    description:
      'Dit was een sessie waar er duidelijk was gemaakt hoe het brein functioneert door prikkels van technologie (onder andere een gsm).',
  },
  {
    image: '/resources/activities/1.jpg',
    category: 'popsessie',
    name: 'My Team and I',
    description:
      'Dit was een sessie gericht op samenwerking van een team en haalde aan welke valkuilen er kunnen zijn.',
  },
  {
    image: '/resources/activities/1.jpg',
    category: 'projectweek',
    name: 'projectweek - Hogeschool PXL',
    description:
      'Dit was een projectweek waar er verschillende sessies plaatsvonden voor de start van het Researchproject.',
  },
];

const uniqueCategories = [
  'alle activiteiten',
  ...new Set(activityData.map((activity) => activity.category)),
];

const Activities = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('alle activiteiten');
  const filteredActivities = activityData.filter((activity) => {
    return category === 'alle activiteiten'
      ? activity
      : activity.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Activities
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full grid h-full md:grid-cols-6 lg:max-w-[640px]
          mb-12`mx-auto mb:border dark:border-none"
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text=lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredActivities.map((activity, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ActivityCard activity={activity} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Activities;
