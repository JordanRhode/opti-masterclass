import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  TestimonialsBlock as TestimonialsBlockProps,
  TestimonialItemBlock,
} from '@/lib/optimizely/types/generated';
import { castContent } from '@/lib/optimizely/types/typeUtils';

export default function TestimonialsBlock({
  title,
  testimonials,
}: TestimonialsBlockProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-12 text-3xl font-bold" data-epi-edit="title">
        {title}
      </h2>
      <div className="grid gap-8 md:grid-cols-3" data-epi-edit="testimonials">
        {testimonials?.map((testimonialItem, index) => {
          const testimonial = castContent<TestimonialItemBlock>(
            testimonialItem,
            'TestimonialItemBlock'
          );
          if (!testimonial) return null;

          return (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatarSrc ?? './placeholder.svg'}
                      alt={testimonial.fullName ?? ''}
                    />
                    <AvatarFallback>
                      {testimonial.fullName?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-sm font-medium">
                      {testimonial.fullName}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
