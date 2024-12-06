const Button = ({ buttonContent, color, borderColor, borderSize }) => {
  return (
    <button className={`rounded-sm px-1 py-1  ${borderColor} ${borderSize} ${color}`}>
      <div className="h-full w-full bg-customBlack px-7 py-2  hover:bg-transparent">{buttonContent}</div>
    </button>
  );
};

export default Button;

// sådan skal denne styles
// <Button color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Primær knap"></Button>
