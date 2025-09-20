import { Card, Skeleton } from 'antd';

const LoadingCard = ({ count }: { count: number }) => {
  const cards = () => {
    const totalCards: React.ReactNode[] = [];

    for (let i = 0; i < count; i++) {
      totalCards.push(
        <Card className="col-md-12" key={i}>
          <Skeleton active></Skeleton>
        </Card>
      );
    }
    return totalCards;
  };
  return <div className="row pb-5">{cards()}</div>;
};

export default LoadingCard;
