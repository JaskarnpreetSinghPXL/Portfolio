import Image from 'next/image';
import { Card, CardHeader } from './ui/Card';
import { Badge } from './ui/Badge';

const ActivityCard = ({ activity }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader>
        <div
          className="relative w-full h-[300px] flex items-center justify-center 
        bg-tertiary dark:bg-secondary/40 xl:bg-[110%] overflow-hidden"
        >
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={activity.image}
            alt=""
            width={247}
            height={250}
            priority
          />
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {activity.category}
        </Badge>
        <h4 className="h4 mb-1">{activity.name}</h4>
        <p className="text-muted-foreground text-lg">{activity.description}</p>
      </div>
    </Card>
  );
};

export default ActivityCard;
