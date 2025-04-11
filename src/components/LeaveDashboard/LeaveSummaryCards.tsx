import React, { useState } from "react";
import { Card, CardHeader, Icon, Button } from "@ui5/webcomponents-react";
import { LeaveRequest } from "@/types/leaveTable";
import { getLeaveSummaryCards } from "@/utils/getSummaryLeaves";

type LeaveSummaryProps = {
  data: LeaveRequest[];
};

const LeaveSummaryCards: React.FC<LeaveSummaryProps> = ({ data }) => {
  const cards = getLeaveSummaryCards(data);
  const [index, setIndex] = useState(0);

  const cardWidth = 260;
  const gap = 16;

  const canGoPrev = index > 0;
  const canGoNext = index < cards.length - 1;

  const scrollLeft = () => setIndex((i) => (canGoPrev ? i - 1 : i));
  const scrollRight = () => setIndex((i) => (canGoNext ? i + 1 : i));

  return (
    <>
      <div className="lg:hidden mb-6">
        <div className="flex items-center">
          <Button
            icon="slim-arrow-left"
            onClick={scrollLeft}
            disabled={!canGoPrev}
            design="Transparent"
            className="mr-2"
          />

          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${index * (cardWidth + gap)}px)`,
              }}
            >
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="min-w-[260px] max-w-[260px] m-2"
                >
                  <Card className="drop-shadow-md hover:drop-shadow-lg">
                    <CardHeader
                      subtitleText={card.title}
                      titleText={String(card.value)}
                      avatar={<Icon name={card.icon} className={card.color} />}
                    />
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            icon="slim-arrow-right"
            onClick={scrollRight}
            disabled={!canGoNext}
            design="Transparent"
            className="ml-2"
          />
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 mb-6">
        {cards.map((card) => (
          <Card
            key={card.title}
            className="drop-shadow-md hover:drop-shadow-lg transition"
            header={
              <CardHeader
                subtitleText={card.title}
                titleText={String(card.value)}
                avatar={<Icon name={card.icon} className={card.color} />}
              />
            }
          />
        ))}
      </div>
    </>
  );
};

export default LeaveSummaryCards;
