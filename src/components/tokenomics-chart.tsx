import { useEffect, useRef } from "react";

export function TokenomicsChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 300;
    canvas.height = 300;

    // Data for the pie chart
    const data = [
      { label: "Liquidity", value: 40, color: "#22D1F8" },
      { label: "Team", value: 15, color: "#FF4EA3" },
      { label: "Marketing", value: 20, color: "#9945FF" },
      { label: "Development", value: 15, color: "#14F195" },
      { label: "Community", value: 10, color: "#FFC107" },
    ];

    // Calculate total
    const total = data.reduce((sum, item) => sum + item.value, 0);

    // Draw the pie chart
    let startAngle = 0;
    data.forEach((item) => {
      const sliceAngle = (2 * Math.PI * item.value) / total;

      // Draw slice
      ctx.beginPath();
      ctx.moveTo(150, 150);
      ctx.arc(150, 150, 120, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = item.color;
      ctx.fill();

      // Add slice border
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#181F35";
      ctx.stroke();

      // Calculate label position
      const middleAngle = startAngle + sliceAngle / 2;
      const labelRadius = 80;
      const labelX = 150 + labelRadius * Math.cos(middleAngle);
      const labelY = 150 + labelRadius * Math.sin(middleAngle);

      // Draw label line
      ctx.beginPath();
      ctx.moveTo(
        150 + 100 * Math.cos(middleAngle),
        150 + 100 * Math.sin(middleAngle)
      );
      ctx.lineTo(
        150 + 140 * Math.cos(middleAngle),
        150 + 140 * Math.sin(middleAngle)
      );
      ctx.strokeStyle = item.color;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw label text
      ctx.font = "bold 14px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${item.value}%`, labelX, labelY);

      startAngle += sliceAngle;
    });

    // Draw center circle
    ctx.beginPath();
    ctx.arc(150, 150, 60, 0, 2 * Math.PI);
    ctx.fillStyle = "#181F35";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#22D1F8";
    ctx.stroke();

    // Draw center text
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("$TXPT", 150, 140);
    ctx.font = "16px Arial";
    ctx.fillText("1 Billion", 150, 165);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <canvas
        ref={canvasRef}
        className="max-w-full"
        width="300"
        height="300"
      ></canvas>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
        {[
          { label: "Liquidity", value: "40%", color: "#22D1F8" },
          { label: "Team", value: "15%", color: "#FF4EA3" },
          { label: "Marketing", value: "20%", color: "#9945FF" },
          { label: "Development", value: "15%", color: "#14F195" },
          { label: "Community", value: "10%", color: "#FFC107" },
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-sm text-[#abc4ff] dark:text-[#d1e0ff]">
              {item.label}: {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
