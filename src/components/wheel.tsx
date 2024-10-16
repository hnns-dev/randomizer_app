import React from "react";

interface WheelProps {
  items: string[];
}

function Wheel({ items }: WheelProps): JSX.Element {
  const colors = ["#891f34", "#cd3147", "#ed7f86"];
  const defaultColor = "#f4adb0"; // Farbe für leeres Rad

  const getWheelSections = () => {
    if (items.length === 0) {
      return <circle cx="100" cy="100" r="100" fill={defaultColor} />;
    }

    if (items.length === 1) {
      return (
        <g>
          <circle cx="100" cy="100" r="100" fill={colors[0]} />
          <text
            x="100"
            y="100"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#fff"
            fontSize="10"
          >
            {items[0]}
          </text>
        </g>
      );
    }

    return items.map((item, index) => {
      const startAngle = (index / items.length) * 360;
      const endAngle = ((index + 1) / items.length) * 360;
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

      const startX = 100 + 100 * Math.cos((startAngle * Math.PI) / 180);
      const startY = 100 + 100 * Math.sin((startAngle * Math.PI) / 180);
      const endX = 100 + 100 * Math.cos((endAngle * Math.PI) / 180);
      const endY = 100 + 100 * Math.sin((endAngle * Math.PI) / 180);

      const pathData = [
        `M 100 100`,
        `L ${startX} ${startY}`,
        `A 100 100 0 ${largeArcFlag} 1 ${endX} ${endY}`,
        `Z`,
      ].join(" ");

      return (
        <g key={index}>
          <path d={pathData} fill={colors[index % colors.length]} />
          <text
            x="100"
            y="100"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#fff"
            fontSize="8"
            transform={`rotate(${
              (startAngle + endAngle) / 2
            } 100 100) translate(0 -75) rotate(-${
              (startAngle + endAngle) / 2
            })`}
          >
            {item}
          </text>
        </g>
      );
    });
  };

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {getWheelSections()}
    </svg>
  );
}

export default Wheel;
