import { Card, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

const ActivityCard = ({ activity }) => {
  return (
    <Card className="group overflow-hidden relative h-[23rem]">
      <CardHeader>
        <p className="text-sm mb-2 absolute top-5 right-7">{activity.date}</p>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-5 left-7">
          {activity.category}
        </Badge>
        <h4 className="h4 mb-1">{activity.name}</h4>
        <p className="text-muted-foreground text-lg">{activity.description}</p>
      </div>
    </Card>
  );
};

export default ActivityCard;
