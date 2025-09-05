import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type React from 'react'; // Import React
import Image from 'next/image';
import {
  ServicesBlock as ServicesBlockProps,
  ServiceItem,
} from '@/lib/optimizely/types/generated';
import { castContent } from '@/lib/optimizely/types/typeUtils';

export default function ServicesBlock({ services }: ServicesBlockProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-8 md:grid-cols-3" data-epi-edit="services">
        {services?.map((serviceItem, index) => {
          const service = castContent<ServiceItem>(serviceItem, 'ServiceItem');
          if (!service) return null;

          return (
            <Card key={index}>
              <CardHeader>
                {service?.icon && (
                  <div className="mb-4">
                    <Image
                      src={service.icon ?? './placeholder.svg'}
                      alt={service.title ?? ''}
                      width={50}
                      height={50}
                    />
                  </div>
                )}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
