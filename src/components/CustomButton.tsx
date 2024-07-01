import { Button } from "@/components/ui/button";

interface CustomButtonProps {
  title: string;
  filter: string;
  onClick: (filter: string) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, filter, onClick }) => {
  return (
    <div
      onClick={() => onClick(filter)}
      className="flex items-center justify-center mx-auto cursor-pointer"
    >
      <Button
        className="px-8 relative before:absolute before:w-1/2 before:h-1/2 before:top-0 before:left-0 before:border-t-4 before:border-l-4 before:border-white before:border-solid
        before:duration-500
        after:absolute after:w-1/2 after:h-1/2 after:right-0 after:bottom-0 after:border-b-4 after:border-r-4 after:border-white after:border-solid 
        after:duration-500
        hover:after:w-full hover:after:h-full hover:before:w-full hover:before:h-full
        "
      >
        {title}
      </Button>
    </div>
  );
};

export default CustomButton;
