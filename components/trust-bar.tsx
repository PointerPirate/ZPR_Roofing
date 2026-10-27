import { ShieldCheck, Award, Users, DollarSign, Clock } from "lucide-react";

const ITEMS = [
  { icon: Clock, text: "15+ Years of Hands-On Experience" },
  { icon: ShieldCheck, text: "Licensed in Illinois & Wisconsin" },
  { icon: Award, text: "GAF Certified" },
  { icon: Users, text: "In-House Crew, No Subcontractors" },
  { icon: DollarSign, text: "Financing Available" },
];

export function TrustBar() {
  return (
    <section className="py-10 px-6 bg-background border-y border-border">
      <div className="container mx-auto">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{item.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
