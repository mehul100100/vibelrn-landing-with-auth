type ToolCardProps = {
  svg: React.ReactNode; // mandatory
};

const ToolCard = ({ svg }: ToolCardProps) => {
  return (

    <div className="w-full">
      {svg}
    </div>
  );
};

export default ToolCard;
